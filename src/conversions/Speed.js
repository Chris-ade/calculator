const conversionData = {
    "m/s": { label: 'm/s', title: 'Meter per second' },
    "ma": { label: 'Ma', title: 'Mach' },
    "km/h": { label: 'km/h', title: 'Kilometer per hour' },
    "km/s": { label: 'km/s', title: 'Kilometer per second' },
    "kn": { label: 'kn', title: 'Knot' },
    "mph": { label: 'mph', title: 'Mile per hour' },
    "fps": { label: 'fps', title: 'Foot per second' },
    "ips": { label: 'ips', title: 'Inch per second' },
    "c": { label: 'c', title: 'Lightspeed' }
};

const calculateResult = (setSecondScreenValue, unit1, unit2, value) => {
    value = parseFloat(value);
    let condition = `${unit1}-${unit2}`;
    let result;

    if (unit1 === unit2) {
        setSecondScreenValue(value.toLocaleString());
    } else {
        console.log(condition);
      switch (condition) {
        case ('m/s-km/s'):
          result = value * 0.001;
        break;
        case ('m/s-ma'):
          result = value * 0.00293;
        break;
        case ('m/s-km/h'):
          result = value * 3.6; 
        break;
        case ('m/s-km/s'):
          result = value * 0.001;
        break;
        case ('m/s-kn'):
          result = value * 1.943;
        break;
        case ('m/s-mph'):
          result = value * 2.240;
        break;
        case ('m/s-fps'):
          result = value * 3.280;
        break;
        case ('m/s-ips'):
          result = value * 39.40;
        break;
        case ('m/s-c'):
          result = value * 3.340e-9;
        break;
        case ('ma-m/s'):
          result = value * 340.3;
        break;
        case ('ma-km/h'):
          result = value * 1225.08;
        break;
        case ('ma-km/s'):
          result = value * 0.3403;
        break;
        case ('ma-kn'):
          result = value * 661.50;
        break;
        case ('ma-mph'):
          result = value * 761.23;
        break;
        case ('ma-fps'):
          result = value * 1116.47;
        break;
        case ('ma-ips'):
          result = value * 13397.64;
        break;
        case ('ma-c'):
          result = value * 1.135e-6;
        break;
        case ('km/h-m/s'):
          result = value * 0.280;
        break;
        case ('km/h-ma'):
          result = value * 0.000816273223;
        break;
        case ('km/h-km/s'):
          result = value * 0.000277777778;
        break;
        case ('km/h-kn'):
          result = value * 0.539956803;
        break;
        case ('km/h-mph'):
          result = value * 0.621371192;
        break;
        case ('km/h-fps'):
          result = value * 0.911344415;
        break;
        case ('km/h-ips'):
          result = value * 10.936133;
        break;
        case ('km/h-c'):
          result = value * 9.26566931e-10;
        break;
        case ('km/s-m/s'):
          result = value * 17000;
        break;
        case ('km/s-ma'):
          result = value * 49.9560;
        break;
        case ('km/s-km/h'):
          result = value * 61200;
        break;
        case ('km/s-kn'):
          result = value * 1943.84449;
        break;
        case ('km/s-mph'):
          result = value * 2236.93629;
        break;
        case ('km/s-fps'):
          result = value * 3280.8399;
        break;
        case ('km/s-ips'):
          result = value * 39370.0787;
        break;
        case ('km/s-c'):
          result = value * 3.33564095e-6;
        break;
        case ('kn-m/s'):
          result = value * 0.514;
        break;
        case ('kn-km/h'):
          result = value * 1.852;
        break;
        case ('kn-ma'):
          result = value * 0.00151173801;
        break;
        case ('kn-km/s'):
          result = value * 0.000514;
        break;
        case ('kn-mph'):
          result = value * 1.1508;
        break;
        case ('kn-fps'):
          result = value * 1.6880;
        break;
        case ('kn-ips'):
          result = value * 20.2537183;
        break;
        case ('kn-c'):
          result = value * 1.71600196e-9;
        break;
        case ('mph-m/s'):
          result = value * 0.44704;
        break;
        case ('mph-ma'):
          result = value * 0.001313;
        break;
        case ('mph-km/h'):
          result = value * 1.609344;
        break;
        case ('mph-km/s'):
          result = value * 0.00044704;
        break;
        case ('mph-kn'):
          result = value * 0.868976242;
        break;
        case ('mph-fps'):
          result = value * 1.46666667;
        break;
        case ('mph-ips'):
          result = value * 17.6;
        break;
        case ('mph-c'):
          result = value * 1.49116493e-9;
        break;
        case ('fps-m/s'):
          result = value * 0.3048;
        break;
        case ('fps-ma'):
          result = value * 0.00090;
        break;
        case ('fps-km/h'):
          result = value * 1.09728;
        break;
        case ('fps-km/s'):
          result = value * 0.0003048;
        break;
        case ('fps-kn'):
          result = value * 0.592483801;
        break;
        case ('fps-mph'):
          result = value * 0.681818182;
        break;
        case ('fps-ips'):
          result = value * 12;
        break;
        case ('fps-c'):
          result = value * 1.01670336e-9;
        break;
        case ('ips-m/s'):
          result = value * 0.0254;
        break;
        case ('ips-ma'):
          result = value * 7.46400235e-5;
        break;
        case ('ips-km/h'):
          result = value * 0.09144;
        break;
        case ('ips-km/s'):
          result = value * 2.54e-5;
        break;
        case ('ips-kn'):
          result = value * 0.0493736501;
        break;
        case ('ips-mph'):
          result = value * 0.0568181818;
        break;
        case ('ips-fps'):
          result = value * 0.0833333333;
        break;
        case ('ips-c'):
          result = value * 8.47252802e-11;
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

const defaultSettings = {
    defaultUnit1: 'm/s',
    defaultUnit2: 'm/s',
    defaultTitle1: 'Meter per second',
    defaultTitle2: 'Meter per second'
}

export { conversionData, calculateResult, defaultSettings };