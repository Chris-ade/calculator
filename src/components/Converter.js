import React, { useState, useEffect } from 'react';
import { ConverterScreen } from './Screen';
import Buttons from './ConverterButtons';

function Converter({toggleApps}) {
  const [firstScreenValue, setFirstScreenValue] = useState(0);
  const [secondScreenValue, setSecondScreenValue] = useState(0);
  const [selectedUnit1, setSelectedUnit1] = useState(''); // Unit from the first select
  const [selectedUnit2, setSelectedUnit2] = useState(''); // Unit from the second select

  function clearScreen() {
    // Clear first screen 
    setFirstScreenValue(0);
    // Clear second screen
    setSecondScreenValue(0);
  };

  const appendToScreen = (value) => {
    value = parseInt(value).toLocaleString();

    // Appends new value to previous values
    setFirstScreenValue((prev) => prev === 0 ? value : prev + value);
  };

  const displayResult = (value) => {
    setSecondScreenValue(value);
  }

  const handleInputChange = (e) => {
    setSecondScreenValue(e.target.value);
    calculateResult(selectedUnit1, selectedUnit2, firstScreenValue);
  };

  const handleSelectChange1 = (e) => {
    setSelectedUnit1(e.target.value);
    calculateResult(selectedUnit1, selectedUnit2, firstScreenValue);
  };

  const handleSelectChange2 = (e) => {
    setSelectedUnit2(e.target.value);
    calculateResult(selectedUnit1, selectedUnit2, firstScreenValue);
  };

  const conversionData = {
    y: { label: 'Year' },
    wk: { label: 'Week' },
    d: { label: 'Day' },
    h: { label: 'Hour' },
    min: { label: 'Minute' },
    s: { label: 'Second' },
    ms: { label: 'Millisecond' },
    us: { label: 'Microsecond' },
    ps: { label: 'Picosecond' }
  };

  const calculateResult = (unit1, unit2, value) => {
    value = parseFloat(value);
    let condition = `${unit1}-${unit2}`;
    let result;

    if (unit1 === unit2) {
      displayResult(value.toLocaleString());
    } else {
      console.log(condition);
      switch (condition) {
        case ('y-wk'):
          result = value * 52.143;
        break;
        case ('y-d'):
          result = value * 365;
        break;
        case ('y-h'):
          result = value * (24 * 365); 
        break;
        case ('y-min'):
          result = value * (24 * 60 * 365);
        break;
        case ('y-s'):
          result = value * (24 * 60 * 60 * 365);
        break;
        case ('y-ms'):
          result = value * 3.1536e10;
        break;
        case ('y-us'):
          result = value * 3.1536e13;
        break;
        case ('y-ps'):
          result = value * 3.1536e22;
        break;
        case ('d-y'):
          result = value / 365;
        break;
        case ('d-h'):
          result = value * 24;
        break;
        case ('h-d'):
          result = value / 24;
        break;
        default:
          result = "Invalid conversion";
        break;
      }
  
      displayResult(result.toLocaleString());
    }
  };

  function backspace() {
    // Removes a character from the first screen
    setFirstScreenValue((prev) => prev !== '' ? prev.slice(0, -1) : 0);
  };

  function handleClick(event) {
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

  useEffect(() => {
    if (firstScreenValue !== 0) {
        calculateResult(selectedUnit1, selectedUnit2, firstScreenValue);
    }

    if (firstScreenValue === 0) {
        setSecondScreenValue(0);
    }
  }, [firstScreenValue]);

  return (
    <div className="calculator-body-container">
      <div className="calculator-body converter">
        <ConverterScreen
          conversionData={conversionData}
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
    </div>
  );
}

export default Converter;