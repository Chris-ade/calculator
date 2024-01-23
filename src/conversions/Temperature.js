const conversionData = {
    c: { label: 'C', title: 'Celsius', toCelsius: (value) => value, fromCelsius: (value) => value },
    f: { label: 'F', title: 'Fahrenheit', toCelsius: (value) => (value - 32) * (5 / 9), fromCelsius: (value) => value * (9 / 5) + 32 },
    k: { label: 'K', title: 'Kelvin', toCelsius: (value) => value - 273.15, fromCelsius: (value) => value + 273.15 },
};

export { conversionData };