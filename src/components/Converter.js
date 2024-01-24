import React, { useState, useEffect } from 'react';
import { ConverterScreen } from './Screen';
import Buttons from './ConverterButtons';

const Converter = ({toggleApps, category}) => {
  const [firstScreenValue, setFirstScreenValue] = useState(0);
  const [secondScreenValue, setSecondScreenValue] = useState(0);
  const [selectedUnit1, setSelectedUnit1] = useState(''); // Unit from the first select
  const [selectedUnit2, setSelectedUnit2] = useState(''); // Unit from the second select
  const [unitsData, setUnitsData] = useState(null);
  const [conversionTitle1, setConversionTitle1] = useState('');
  const [conversionTitle2, setConversionTitle2] = useState('');

  useEffect(() => {
      defaultSettings(category);
  }, [category]);

  useEffect(() => {
    import(`../conversions/${category}`).then(({ conversionData }) => {
      setUnitsData(conversionData);
      if (firstScreenValue !== 0) {
        calculateResult(setSecondScreenValue, selectedUnit1, selectedUnit2, firstScreenValue);
      }
  });

  if (firstScreenValue === 0) {
        setSecondScreenValue(0);
    }
  }, [firstScreenValue, selectedUnit1, selectedUnit2, category]);

  const setSettings = (unit1, unit2, title1, title2) => {
      setSelectedUnit1(unit1);
      setSelectedUnit2(unit2);
      setConversionTitle1(title1);
      setConversionTitle2(title2);
  }

  const defaultSettings = (category) => {
      switch (category) {
        case 'Speed':
          setSettings('m/s', 'km/h', 'Meter per second', 'Kilometer per hour');
        break;
        case 'Time':
          setSettings('y', 'wk', 'Year', 'Week');
        break;
        case 'Temperature':
          setSettings('c', 'f', 'Celsius', 'Fahrenheit');
        break;
        case 'Mass':
          setSettings('t', 'kg', 'Tonne', 'Kilogram');
        break;
        case 'Data':
          setSettings('b', 'kb', 'Byte', 'Kilobyte');
        break;
        case 'Length':
          setSettings('km', 'm', 'Kilometer', 'Meter');
        break;
        case 'Area':
          setSettings('sqkm', 'ha', 'Square kilometer', 'Hectare');
        break;
        case 'Volume':
          setSettings('cbm', 'cbdm', 'Cubic meter', 'Cubic decimeter');
        break;
        default:
          // Do nothing
        break;
      }
  }

  const clearScreen = () => {
    // Clear first screen 
    setFirstScreenValue(0);
    // Clear second screen
    setSecondScreenValue(0);
  };

  const appendToScreen = (value) => {
    // Ensure value is a string
    value = value.toString();
  
    // Check if the value already contains a decimal point
    if (value === '.' && firstScreenValue.includes('.')) {
      return; // Do nothing if the value is a decimal point and there is already one on the screen
    }
  
    // Append the new value to the previous values
    setFirstScreenValue((prev) => (prev === 0 ? value : prev + value));
  };  

  const handleInputChange = (e) => {
    setSecondScreenValue(e.target.value);
  };

  const handleSelectChange1 = (e) => {
    const newUnit1 = e.target.value;
    setSelectedUnit1(newUnit1);
    // Set the title for the selected unit
    setConversionTitle1(unitsData[newUnit1].title);
  };
  
  const handleSelectChange2 = (e) => {
    const newUnit2 = e.target.value;
    setSelectedUnit2(newUnit2);
    // Set the title for the selected unit
    setConversionTitle2(unitsData[newUnit2].title);
  };

  const backspace = () => {
    // Removes a character from the first screen
    setFirstScreenValue((prev) => {
      // Convert to string if it's not already
      const stringValue = prev.toString();
  
      // If there is only one character, reset to zero
      if (stringValue.length === 1) {
        return 0;
      }
      // Remove the last character
      return stringValue.slice(0, -1);
    });
  }  

  const handleClick = (event) => {
    let value = event.target.textContent;

    if (event.currentTarget.id === 'DEL') {
        value = 'DEL';
    }

    switch (value) {
      case 'AC':
        clearScreen();
        break;
      case 'DEL':
        backspace();
        break;
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        appendToScreen(value);
        break;
      case '.':
        appendToScreen(value);
        break;
      default:
        console.warn(`Unknown button value: ${value}`);
    }
  };

  const calculateResult = (setSecondScreenValue, unit1, unit2, value) => {
    value = parseFloat(value);
    let result;

    if (unit1 === unit2) {
        setSecondScreenValue(value.toLocaleString());
    } else {
      if (category === "Temperature") {
        const toCelsius1 = unitsData[unit1].toCelsius;
        const fromCelsius2 = unitsData[unit2].fromCelsius;

        result = fromCelsius2(toCelsius1(value));
      } else {
        const conversionFactor = unitsData[unit1].factor / unitsData[unit2].factor;
        result = value * conversionFactor;
      }
  
      if (!isNaN(result)) {
        if (Math.abs(result) < 1e12) {
          if (result > 0 && result < 1) {
            setSecondScreenValue(result.toFixed(10));
          } else {
            setSecondScreenValue(result.toLocaleString());
          }
        } else {
            // Display in exponential form with a limited precision
            const roundedExponential = Number.isInteger(result) ? result.toExponential(8) : result.toExponential(3);
            setSecondScreenValue(roundedExponential);
        }
      } else {
        setSecondScreenValue("Invalid conversion");
      }
    }
};
  
  return (
    <div className="calculator-body-container">
      <div className="calculator-body converter">
        <ConverterScreen
          conversionData={unitsData || {}}
          firstScreenValue={firstScreenValue}
          secondScreenValue={secondScreenValue}
          handleInputChange={handleInputChange}
          handleSelectChange1={handleSelectChange1}
          handleSelectChange2={handleSelectChange2}
          selectedUnit1={selectedUnit1}
          selectedUnit2={selectedUnit2}
          conversionTitle={conversionTitle1}
          conversionTitle2={conversionTitle2}
        />
        <Buttons handleClick={handleClick} toggleApps={toggleApps} />
      </div>
      <div className="is-credits">Created By <strong>Chris Adebiyi</strong></div>
    </div>
  );
}

export default Converter;