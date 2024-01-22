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
  }, []);

  useEffect(() => {
    import(`../conversions/${category}`).then(({ conversionData, calculateResult, defaultSettings }) => {
      setUnitsData(conversionData);
      if (firstScreenValue !== 0) {
        calculateResult(setSecondScreenValue, selectedUnit1, selectedUnit2, firstScreenValue);
      }
  });

  if (firstScreenValue === 0) {
        setSecondScreenValue(0);
    }
  }, [firstScreenValue, selectedUnit1, selectedUnit2, category]);

  const setSettings = (unit, title) => {
      setSelectedUnit1(unit);
      setSelectedUnit2(unit);
      setConversionTitle1(title);
      setConversionTitle2(title);
  }

  const defaultSettings = (category) => {
      switch (category) {
        case 'Speed':
          setSettings('m/s', 'Meter per second')
        break;
        case 'Time':
          setSettings('y', 'Year');
        break;
        case 'Temperature':
          setSettings('c', 'Celsius')
        default:
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