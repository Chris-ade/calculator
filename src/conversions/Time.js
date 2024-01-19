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

const calculateResult = (setSecondScreenValue, unit1, unit2, value) => {
    value = parseFloat(value);
    let condition = `${unit1}-${unit2}`;
    let result;

    if (unit1 === unit2) {
        setSecondScreenValue(value.toLocaleString());
    } else {
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
        case ('wk-y'):
          result = value / 52.15;
        break;
        case ('wk-d'):
          result = value * 7;
        break;
        case ('wk-h'):
          result = value * 168;
        break;
        case ('wk-min'):
          result = value * 10080;
        break;
        case ('wk-s'):
          result = value * 604800;
        break;
        case ('wk-ms'):
          result = value * 604800000;
        break;
        case ('wk-us'):
          result = value * 6.048e11;
        break;
        case ('wk-ps'):
          result = value * 6.048e17;
        break;
        case ('d-y'):
          result = value / 365;
        break;
        case ('d-wk'):
          result = value / 7;
        break;
        case ('d-h'):
          result = value * 24;
        break;
        case ('d-min'):
          result = value * 1440;
        break;
        case ('d-s'):
          result = value * 86400;
        break;
        case ('d-ms'):
          result = value * 86400000;
        break;
        case ('d-us'):
          result = value * 8.64e10;
        break;
        case ('d-ps'):
          result = value * 8.64e16;
        break;
        case ('h-y'):
          result = value / 8760;
        break;
        case ('h-wk'):
          result = value / 168;
        break;
        case ('h-d'):
          result = value / 24;
        break;
        case ('h-min'):
          result = value * 60;
        break;
        case ('h-s'):
          result = value * 60 * 60;
        break;
        case ('h-ms'):
          result = value * 3600000;
        break;
        case ('h-us'):
          result = value * 3.6e9;
        break;
        case ('h-ps'):
          result = value * 3.63e15;
        break;
        case ('min-y'):
          result = value / 525600;
        break;
        case ('min-wk'):
          result = value / 10080;
        break;
        case ('min-d'):
          result = value / 1440;
        break;
        case ('min-h'):
          result = value / 60;
        break;
        case ('min-s'):
          result = value * 60;
        break;
        case ('min-ms'):
          result = value * 60000;
        break;
        case ('min-us'):
          result = value * 60000000;
        break;
        case ('min-ps'):
          result = value * 6e13;
        break;
        case ('s-y'):
          result = value / 31536000;
        break;
        case ('s-d'):
          result = value / 86400;
        break;
        case ('s-wk'):
          result = value / 31536000;
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