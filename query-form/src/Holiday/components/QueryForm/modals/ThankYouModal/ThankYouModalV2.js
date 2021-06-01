import React, { useContext } from 'react';
import CustomModalWrapper from '../../common/CustomModalWrapper/CustomModalWrapper';
import RequestReceived from '../../components/RequestReceived/RequestReceived';
import ThankYouMobile from '../../components/ThankYouMobile/ThankYouMobile';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import './ThankYouModal.css';

const ThankYouModalV2 = (props) => {

    const queryContext = useContext(QueryFormContext);
    const mobileNumber = queryContext.mobileNumberFieldState.mobileNumber !== '' ? queryContext.countryCodeObj.code + " " + queryContext.mobileNumberFieldState.mobileNumber : '+91 8654745484';
    const isMobile = window.innerWidth < 480 ? true : false;

    return (
        <CustomModalWrapper width={648} {...props} classes="thankYouModalWrapper">
            {
                !isMobile ? <React.Fragment>
                    <header className="thankyouHeader">
                        <span>Thank You! {queryContext.nameFieldState.name}</span>
                        <span tabIndex={0} className="queryFormBgProperties closeIcon" onClick={props.onRequestClose} onKeyDown={props.onRequestClose}></span>
                    </header>
                    <div className="info">
                        <p>We have successfully submitted your request.</p>
                        <p className="appendBottom5">Our holiday expert will soon contact you on your number.</p>
                        <p className="latoBold">{mobileNumber}</p>
                    </div>
                </React.Fragment> :
                    <ThankYouMobile closeModal={props.onRequestClose} />
            }
            <RequestReceived />
        </CustomModalWrapper>
    )
}

export default ThankYouModalV2;
