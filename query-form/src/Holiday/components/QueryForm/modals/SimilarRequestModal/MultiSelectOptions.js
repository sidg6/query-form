import React from 'react';
import { useState } from 'react';
import InputCheckBox from '../../common/InputCheckBox/InputCheckBox';
import { multiSelectOptions } from '../../QueryFormData';


const MultiSelectOptions = () => {

    const [otherReasonFlag, setOtherReasonFlag] = useState(true);

    return (
        <React.Fragment>
            {
                multiSelectOptions.map((option, index) => {
                    return <InputCheckBox key={index} labelName={index} value={option} />
                })
            }
            {
                otherReasonFlag && <React.Fragment>
                    <p className="latoBold appendTop20 appendBottom10">Kindly specify the reason (Optional)</p>
                    <textarea className="otherReasonTextArea" />
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default MultiSelectOptions;
