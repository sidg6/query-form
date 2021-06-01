import React from 'react';
import { useState } from 'react';
import Button from '../../common/Button/Button';
import CustomModalWrapper from '../../common/CustomModalWrapper/CustomModalWrapper';
import './OtpModal.css';

const OtpModal = (props) => {

    const [value, setValue] = useState('');
    const [sucessMessage, setSuccessMessage] = useState(false);
    const [resendOtp, setResendOtp] = useState(false);

    const inputValueHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <CustomModalWrapper width={632} {...props} classes="otpModalWrapper">
            <span className="queryFormBgProperties backArrowGrey left" onClick={props.onRequestClose}></span>
            <span className="queryFormBgProperties closeIcon" onClick={props.onRequestClose}></span>
            <header className="otpHeader">
                <h1 className="heading">One last step</h1>
                <p className="appendBottom32 subHeading">Mobile Verification please enter the one time password for a quick response.</p>
            </header>
            <div className="content">
                <div className="appendBottom10 info">A one time password has been sent to you number.</div>
                <div className="appendBottom25 latoBold number">+91876765413 </div>
                <div className="makeFlex column">
                    <div className="makeFlex latoBold capText appendBottom10">
                        <label htmlFor="enterOtp" className="detailsInput">Enter Otp</label>
                    </div>
                    <div className="otpInputWrapper">
                        <div className="inputNumberWrapper">
                            <input
                                type="number"
                                min="0"
                                placeholder="Enter OTP here"
                                value={value}
                                onChange={inputValueHandler}
                                className="height40 inputField" />
                            {sucessMessage && <span className="greenText font12 latoBold otpMessage">Success! Number verified.</span>}
                        </div>
                        <span className="autoFetching">Auto fetching OTP sent via SMS</span>
                        <span className={`resendCounter ${value.length > 0 ? "latoBold" : ''} ${resendOtp ? 'linkText' : ''}`}>Resend (30s)</span>
                    </div>
                </div>
            </div>
            <footer className="makeFlex hrtlCenter">
                <span className="blueText font16 latoBolder appendRight30 pointer skipBtn">Skip</span>
                <Button
                    btnTxt="Verify & Create Account"
                    btnStyleName={`${resendOtp ? 'disabled' : 'blueGradient'}`}
                    containerStyle={{
                        borderRadius: '34px',
                        padding: '13px 24px'
                    }} />
            </footer>
        </CustomModalWrapper>
    )
}

export default OtpModal;
