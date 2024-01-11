import { useState } from 'react';
import './css/App.css';
import Calculator from './components/Calculator';
import Converter from './components/Converter';

function App() {
  const [isCalculatorActive, setCalculatorActive] = useState(true);

  const toggleApps = () => {
    setCalculatorActive((prev) => !prev);
  };

  return (
    <>
      {isCalculatorActive ? (
        <Calculator toggleApps={toggleApps} />
      ) : (
          <Converter toggleApps={toggleApps} />
      )}
    </>
  );
}

export default App;
