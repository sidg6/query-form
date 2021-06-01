import React from 'react';
import './InputText.css';

const InputText = ({ labelName, placeHolderValue, value, inputValueHandler, classes, searchHandler, children }) => {
    return (
        <div className={`makeFlex column ${classes}`} onClick={searchHandler} onKeyDown={searchHandler}>
            <div className="makeFlex latoBold capText appendBottom10">
                <label htmlFor={labelName} className="detailsInput">{labelName}</label>
            </div>
            <input
                type="text"
                placeholder={placeHolderValue}
                value={value}
                onChange={inputValueHandler}
                className="height40 inputField" />
            {children}
        </div>
    )
}

export default InputText;
