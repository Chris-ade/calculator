const conversionData = {
    c: { label: 'C', title: 'Celsius' },
    f: { label: 'F', title: 'Fahrenheit' },
    k: { label: 'K', title: 'Kelvin' },
};

const calculateResult = (setSecondScreenValue, unit1, unit2, value) => {
    value = parseFloat(value);
    let condition = `${unit1}-${unit2}`;
    let result;

    if (unit1 === unit2) {
        setSecondScreenValue(value.toLocaleString());
    } else {
      switch (condition) {
        case ('c-f'):
          result = (value * (9 / 5)) + 32;
        break;
        case ('c-k'):
          result = value + 273.15;
        break;
        case ('f-c'):
          result = (value - 32) * (5 / 9);
        break;
        case ('f-k'):
          result = (value - 32) * (5 / 9) + 273.15;
        break;
        case ('k-c'):
          result = value - 273.15;
        break;
        case ('k-f'):
          result = (value - 273.15) * (9 / 5) + 32;
        break;
        default:
          result = "Invalid conversion";
        break;
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

export { conversionData, calculateResult };