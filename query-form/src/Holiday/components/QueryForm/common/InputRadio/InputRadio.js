
import React from 'react';
import './InputRadio.css';

const InputRadio = ({ inputName, radioChangeHandler, checkRadio }) => {
    return (
        <span className="customRadioBtn">
            <input
                tabIndex={-1}
                onChange={radioChangeHandler}
                onKeyDown={radioChangeHandler}
                type="radio"
                name={inputName}
                checked={checkRadio} />
            <span className="outer">
                <span className="inner"></span>
            </span>
        </span>
    );
};

export default InputRadio;
