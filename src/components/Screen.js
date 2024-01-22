function CalculatorScreen({ firstScreenValue, secondScreenValue }) {
  return (
    <div className="calculator-screen">
      <div className="credits">Calculator</div>
      <div className="input-screen" id="first_screen">{firstScreenValue}</div> 
      <div className="input-screen" id="second_screen">{secondScreenValue}</div>
    </div>
  );
}

function ConverterScreen({ conversionData, conversionTitle, conversionTitle2, handleInputChange, handleSelectChange1, handleSelectChange2, selectedUnit1, selectedUnit2, firstScreenValue, secondScreenValue }) {
  return (
    <div className="converter-screen">
      <div className="credits">Converter</div>
      <div className="input-screen" id="first_screen">
      <select onChange={handleSelectChange1} value={selectedUnit1}>
      {Object.keys(conversionData).map((unit) => (
        <option key={unit} value={unit}>
          {conversionData[unit].label}
        </option>
      ))}
      </select>
      <input type="text" value={firstScreenValue} onChange={handleInputChange} readOnly />
      <span>{conversionTitle}</span>
      </div>

      <div className="input-screen" id="second_screen">
      <select onChange={handleSelectChange2} value={selectedUnit2}>
      {Object.keys(conversionData).map((unit) => (
        <option key={unit} value={unit}>
          {conversionData[unit].label}
        </option>
      ))}
      </select>
      <input type="text" value={secondScreenValue} readOnly />
      <span>{conversionTitle2}</span>
      </div>
    </div>
  );
}

export { CalculatorScreen, ConverterScreen };