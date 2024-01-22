const conversionData = {
    c: { label: 'C', title: 'Celsius' },
    f: { label: 'F', title: 'Fahrenheit' },
    k: { label: 'K', title: 'Kelvin' },
    r: { label: 'R', title: 'Rankine' },
    re: { label: 'Re', title: 'Reaumur' }
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
          result = value * 33.8;
        break;
        case ('c-k'):
          result = value * 274.15;
        break;
        case ('c-r'):
          result = value * 493.47; 
        break;
        case ('c-re'):
          result = value * 0.8;
        break;
        case ('f-c'):
          result = value * (-17.22222222);
        break;
        case ('f-k'):
          result = value * 255.927778;
        break;
        case ('f-r'):
          result = value * 460.67;
        break;
        case ('f-re'):
          result = value * -13.7777778;
        break;
        case ('k-c'):
          result = value * (-272.15);
        break;
        case ('k-f'):
          result = value * (-457.87);
        break;
        case ('k-r'):
          result = value * 1.8;
        break;
        case ('k-re'):
          result = value * (-217.72);
        break;
        case ('r-c'):
          result = value * (-272.594444);
        break;
        case ('r-f'):
          result = value * (-458.67);
        break;
        case ('r-k'):
          result = value * 0.555555556;
        break;
        case ('r-re'):
          result = value * (-218.075556);
        break;
        case ('re-c'):
          result = value * 1.25;
        break;
        case ('re-f'):
          result = value * 34.25;
        break;
        case ('re-k'):
          result = value * 274.4;
        break;
        case ('re-r'):
          result = value * 493.92;
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