import React, { useState, useEffect } from 'react';
import { ConverterScreen } from './Screen';
import Buttons from './ConverterButtons';

const Converter = ({toggleApps, category}) => {
  const [firstScreenValue, setFirstScreenValue] = useState(0);
  const [secondScreenValue, setSecondScreenValue] = useState(0);
  const [selectedUnit1, setSelectedUnit1] = useState('y'); // Unit from the first select
  const [selectedUnit2, setSelectedUnit2] = useState('y'); // Unit from the second select
  const [unitsData, setUnitsData] = useState(null);

  useEffect(() => {
    import(`../conversions/${category}`).then(({ conversionData, calculateResult }) => {
      setUnitsData(conversionData);
      if (firstScreenValue !== 0) {
        calculateResult(setSecondScreenValue, selectedUnit1, selectedUnit2, firstScreenValue);
      }
    });

    if (firstScreenValue === 0) {
        setSecondScreenValue(0);
    }
  }, [firstScreenValue, selectedUnit1, selectedUnit2, category]);

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
  };
  
  const handleSelectChange2 = (e) => {
    const newUnit2 = e.target.value;
    setSelectedUnit2(newUnit2);
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
        />
        <Buttons handleClick={handleClick} toggleApps={toggleApps} />
      </div>
      <div className="is-credits">Created By <strong>Chris Adebiyi</strong></div>
    </div>
  );
}

export default Converter;