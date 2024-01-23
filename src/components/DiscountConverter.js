import React, { useState, useEffect } from 'react';
import { DiscountConverterScreen } from './Screen';
import Buttons from './ConverterButtons';

const DiscountConverter = ({toggleApps, category}) => {
  const [firstScreenValue, setFirstScreenValue] = useState(0);
  const [secondScreenValue, setSecondScreenValue] = useState('');
  const [thirdScreenValue, setThirdScreenValue] = useState(0);
  const [savings, setSavings] = useState(0);
  
  useEffect(() => {
      if (firstScreenValue !== 0) {
        if (secondScreenValue !== '' && secondScreenValue.length <= 2) {
            calculateResult(firstScreenValue, secondScreenValue);
        }
      }

      if (firstScreenValue === 0) {
        setSecondScreenValue('');
        setThirdScreenValue(0);
      }
  }, [firstScreenValue, secondScreenValue]);

  const clearScreen = () => {
    // Clear first screen 
    setFirstScreenValue(0);
    // Clear second screen
    setSecondScreenValue('');
    // Clear third screen
    setThirdScreenValue(0);
    // Clear the savings value
    setSavings(0);
  };

  const appendToScreen = (value) => {
    // Ensure value is a string
    value = value.toString();

    // Check if the value already contains a decimal point
    if (value === '.' && firstScreenValue.includes('.')) {
      return; // Do nothing if the value is a decimal point and there is already one on the screen
    }

    // Append the new value to the previous values
    setFirstScreenValue((prev) => {
      if (prev === 0) {
            return value;
        } else {
            return prev + value;
        }
      });
    setThirdScreenValue((prev) => (prev === 0 ? value : prev + value));
  };

  const handleInputChange = (e) => {
    setThirdScreenValue(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setSecondScreenValue(e.target.value);
  }

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
    
    setThirdScreenValue((prev) => {
        // Convert to string if it's not already
        const stringValue = prev.toString();
    
        // If there is only one character, reset to zero
        if (stringValue.length === 1) {
          return 0;
        }
        // Remove the last character
        return stringValue.slice(0, -1);
      });
    
    setSavings((prev) => {
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
      case '.':
          appendToScreen(value.toLocaleString());
      break;
      default:
        console.warn(`Unknown button value: ${value}`);
    }
  };

  const calculateResult = (firstScreenValue, secondScreenValue) => {
    const result = (secondScreenValue / 100) * firstScreenValue; 

    if (!isNaN(result)) {
        if (Math.abs(result) < 1e12) {
            if (result > 0 && result < 1) {
                setThirdScreenValue(result.toFixed(10));
                setSavings(result.toLocaleString());
            } else {
                setThirdScreenValue(result.toLocaleString());
                setSavings(result.toLocaleString());
            }
        } else {
            // Display in exponential form with a limited precision
            const roundedExponential = Number.isInteger(result) ? result.toExponential(8) : result.toExponential(3);
            setSecondScreenValue(roundedExponential);
            setSavings(roundedExponential);
        }
    } else {
        setSecondScreenValue("Invalid conversion");
        setSavings("Invalid conversion");
    }
};

  return (
    <div className="calculator-body-container">
      <div className="calculator-body converter">
        <DiscountConverterScreen
          firstScreenValue={firstScreenValue}
          secondScreenValue={secondScreenValue}
          thirdScreenValue={thirdScreenValue}
          handleInputChange={handleInputChange}
          handleInputChange2={handleInputChange2}
          savings={savings}
        />
        <Buttons handleClick={handleClick} toggleApps={toggleApps} />
      </div>
      <div className="is-credits">Created By <strong>Chris Adebiyi</strong></div>
    </div>
  );
}

export default DiscountConverter;