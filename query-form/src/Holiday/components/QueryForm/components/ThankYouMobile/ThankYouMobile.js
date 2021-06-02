import React, { useContext } from 'react';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import './ThankYouMobile.css'

const ThankYouMobile = ({ closeModal }) => {

    const queryContext = useContext(QueryFormContext);
    const mobileNumber = queryContext.mobileNumberFieldState.mobileNumber !== '' ? queryContext.countryCodeObj.code + " " + queryContext.mobileNumberFieldState.mobileNumber : '+91 8654745484';
    const isMobile = window.innerWidth < 480 ? true : false;

    return (
        <React.Fragment>
            <span className="queryFormBgProperties closeIcon" onClick={closeModal}></span>
            <div className="thankYouMobileWrapper">
                <div className="circle greenBorder">
                    <span className="queryFormBgProperties thankYouImage"></span>
                </div>
                <div className="makeFlex column">
                    <h4 className="font20 darkBlue025dd2 latoBolder heading">Thank You {queryContext.nameFieldState.name}</h4>
                    <div className="makeFlex hrtlCenter">
                        <p className="description">Our Holiday Expert will shortly reach out to you with our best quotations.</p>
                        <span className="queryFormBgProperties checkMarkIcon"></span>
                    </div>
                    {!isMobile && <span className="latoBold blackText">{mobileNumber}</span>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default ThankYouMobile;
