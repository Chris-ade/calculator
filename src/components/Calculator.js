import React, { useState, useEffect } from 'react';
import  { CalculatorScreen } from './Screen';
import Buttons from './CalculatorButtons';
import * as mathjs from 'mathjs';

function Calculator({ toggleApps }) {
  const [firstScreenValue, setFirstScreenValue] = useState('');
  const [secondScreenValue, setSecondScreenValue] = useState('');
  const [previousResult, setPreviousResult] = useState('');
  const [clearButtonText, setClearButtonText] = useState('AC');

  function clearScreen() {
    // Clear first screen 
    setFirstScreenValue('');
    // Clear second screen
    setSecondScreenValue('');
    // Clear previous result
    setPreviousResult('');
  };

  const appendToScreen = (value) => {
    // Appends new value to previous values
    setFirstScreenValue((prevValue) => prevValue + value);
  };

  function backspace() {
    // Removes a character from the first screen
    setFirstScreenValue((prevValue) => prevValue.slice(0, -1));
  };

  function sanitize(expression) {
    // Remove anything that is not a digit, operator, or a dot.
    const sanitized = expression.replace(/[^0-9+\-*/.%]/g, '');
    return sanitized;
  };

  function calculate() {
    try {
        const sanitized = sanitize(firstScreenValue);
        const result = mathjs.evaluate(sanitized);
        setSecondScreenValue(result);
    } catch (error) {
      setSecondScreenValue('Error');
    }
  };

  function handleClick(event) {
    let value = event.target.textContent;

    if (event.currentTarget.id === 'DEL') {
        value = 'DEL';
    }

    switch (value) {
      case 'C':
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
      case '+':
      case '-':
      case '*':
      case '/':
        appendToScreen(' ' + value + ' ');
        break;
      case '%':
        appendToScreen('%');
        calculate(); // Calculate percentage immediately
        break;
      case '=':
        calculate();
        break;
      default:
        console.warn(`Unknown button value: ${value}`);
    }
  };

  useEffect(() => {
    setClearButtonText(firstScreenValue === '' ? 'AC' : 'C');

    const sanitizedExpression = sanitize(firstScreenValue);

    if(sanitizedExpression) {
      try {
          const result = mathjs.evaluate(sanitizedExpression);
          setPreviousResult(result); // Store the result
          setSecondScreenValue(result);
      } catch(error) {
        setSecondScreenValue(previousResult !== '' ? previousResult : '');
      }
    } else {
      setSecondScreenValue(previousResult); // Display the previous result if the expression is invalid.
    }

    if (firstScreenValue === '') {
        setSecondScreenValue('');
        setPreviousResult('');
    }
  }, [firstScreenValue]);

  return (
    <div className="calculator-body-container">
      <div className="calculator-body simple">
        <CalculatorScreen firstScreenValue={firstScreenValue} secondScreenValue={secondScreenValue} />
        <Buttons handleClick={handleClick} toggleApps={toggleApps} clearButtonText={clearButtonText} />
      </div>
    </div>
  );
}

export default Calculator;