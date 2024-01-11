function Button({ value, onClick, className = '' }) {
  return (
    <div className={`${className}`} onClick={onClick}>
      {value}
    </div>
  );
}

function DelButton({ onClick, className = ''}) {
  return (
    <div id="DEL" className={className} onClick={onClick}>
      <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="delete">
        <polygon points="20 18 9 18 3 12 9 6 20 6"></polygon>
        <path d="M12.1143819 10.1143819L15.8856181 13.8856181M12.1143819 13.8856181L15.8856181 10.1143819"></path>
      </svg>
    </div>
  );
}

function SwitchButton({ onClick, className }) {
  return (
    <div className={className} onClick={onClick}>
    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="more">
      <rect width="7" height="7" x="3" y="3"></rect>
      <rect width="7" height="7" x="14" y="3"></rect>
      <rect width="7" height="7" x="3" y="14"></rect>
      <rect width="7" height="7" x="14" y="14"></rect>
    </svg>
    </div>
  );
}

export { Button, DelButton, SwitchButton };