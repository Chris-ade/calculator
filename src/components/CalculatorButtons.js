import { Button, DelButton, SwitchButton } from './Button';

function Buttons({ toggleApps, handleClick, clearButtonText }) {
    return (
      <div className="calculator-buttons">
        <div className="button-wrap">
          <Button value={clearButtonText} onClick={handleClick} className="button operator" />
          <DelButton onClick={handleClick} className="button operator" />
          <Button value="%" onClick={handleClick} className="button operator" />
          <Button value="/" onClick={handleClick} className="button operator" />
        </div>

        <div className="button-wrap">
            <Button value="7" onClick={handleClick} className="button" />
            <Button value="8" onClick={handleClick} className="button" />
            <Button value="9" onClick={handleClick} className="button" />
            <Button value="*" onClick={handleClick} className="button operator" />
        </div>

        <div className="button-wrap">
            <Button value="4" onClick={handleClick} className="button" />
            <Button value="5" onClick={handleClick} className="button" />
            <Button value="6" onClick={handleClick} className="button" />
            <Button value="-" onClick={handleClick} className="button operator" />
        </div>

        <div className='button-wrap'>
            <Button value="1" onClick={handleClick} className="button" />
            <Button value="2" onClick={handleClick} className="button" />
            <Button value="3" onClick={handleClick} className="button" />
            <Button value="+" onClick={handleClick} className="button operator" />
        </div>

        <div className="button-wrap">
            <SwitchButton className="button operator" onClick={toggleApps} />
            <Button value="0" onClick={handleClick} className="button" />
            <Button value="." onClick={handleClick} className="button" />
            <Button value="=" onClick={handleClick} className="button operator equals" />
        </div>
      </div>
    );
}

export default Buttons;