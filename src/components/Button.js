import '../css/UIcons.css'

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
      <i className="fi fi-rr-delete"></i>
    </div>
  );
}

function SwitchButton({ onClick, className, type }) {
  return (
    <>
    {type === 'converter' ? (
        <div className={className} onClick={onClick}>
        <i className="fi fi-rr-calculator"></i>
        </div>
      ) : (
        <div className={className} onClick={onClick}>
        <i className="fi fi-rr-exchange"></i>
        </div>
    )}
    </>
  );
}

export { Button, DelButton, SwitchButton };