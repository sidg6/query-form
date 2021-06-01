import React from 'react';
import InputRadio from '../../common/InputRadio/InputRadio';
import { radioSelectOptions } from '../../QueryFormData';

const RadioOptions = () => {
    return (
        radioSelectOptions.map((option, index) => {
            return (
                <label key={index} className="makeFlex appendBottom15">
                    <InputRadio inputName="similarRequest" />
                    <div className="flexOne appendLeft10 inputValues">
                        <p className="latoBold appendBottom5 blackText heading">{option.heading}</p>
                        <p className="grey97 font12 subHeading">{option.subHeading}</p>
                    </div>
                </label>
            )
        })
    )
}

export default RadioOptions;
