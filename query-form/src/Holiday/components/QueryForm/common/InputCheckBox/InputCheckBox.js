import React from 'react';
import './InputCheckBox.css';

const InputCheckBox = ({ labelName, value }) => {
    return (
        <div className="checkmarkWrapper appendBottom12">
            <input type="checkbox" id={labelName} />
            <label htmlFor={labelName} className="height24">
                <p className="font12 appendLeft10 latoBold">{value}</p>
            </label>
        </div>
    )
}

export default InputCheckBox;
