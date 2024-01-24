const conversionData = {
    y: { label: 'y', title: 'Year', factor: 31536000 }, // 1 year = 31536000 seconds
    wk: { label: 'wk', title: 'Week', factor: 604800 }, // 1 week = 604800 seconds
    d: { label: 'd', title: 'Day', factor: 86400 }, // 1 day = 86400 seconds
    h: { label: 'h', title: 'Hour', factor: 3600 }, // 1 hour = 3600 seconds
    min: { label: 'min', title: 'Minute', factor: 60 }, // 1 minute = 60 seconds
    s: { label: 's', title: 'Second', factor: 1 }, // 1 second = 1 second
    ms: { label: 'ms', title: 'Millisecond', factor: 0.001 }, // 1 millisecond = 0.001 seconds
    us: { label: 'us', title: 'Microsecond', factor: 1e-6 }, // 1 microsecond = 1e-6 seconds
    ps: { label: 'ps', title: 'Picosecond', factor: 1e-12 }
};

export { conversionData };