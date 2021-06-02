import React, { useState, useEffect, useContext } from 'react';
import InputText from '../../common/InputText/InputText';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import { countryCodeList } from '../../QueryFormData';

const UserDetails = () => {
  const [arrowActiveClass, setArrowActiveClass] = useState('');

  const queryContext = useContext(QueryFormContext);

  useEffect(() => {
    if (queryContext.dropdownStates.showCountryDropdown) {
      setArrowActiveClass('active');
    } else {
      setArrowActiveClass('');
    }
    if (document.getElementsByClassName('countryCodeWrapper')[0]) {
      document.getElementsByClassName('countryList')[0].focus();
    }
  }, [queryContext.dropdownStates.showCountryDropdown, queryContext.countryCodeObj]);

  return (
    <div className="userDetailsWrapper">
      <div className="nameInputWrapper">
        <InputText
          labelName="Name"
          placeHolderValue="Enter Name"
          classes={`appendRight30  nameInput ${queryContext.nameFieldState.nameFieldError ? "redBorder" : ""
            }`}
          value={queryContext.nameFieldState.name}
          inputValueHandler={queryContext.nameFieldHandler}
        />
        {
          queryContext.nameFieldState.nameFieldError &&
          <span
            className={`appendTop5 font12 latoBold ${queryContext.nameFieldState.nameFieldError ? "redText" : ""
              }`}>
            {queryContext.nameFieldState.nameFieldErrorMessage}
          </span>
        }
      </div>
      <div className="emailInputWrapper">
        <InputText
          labelName="Email"
          placeHolderValue="Enter Email"
          classes={`emailInput ${queryContext.emailFieldState.emailFieldError ? "redBorder" : ""
            }`}
          value={queryContext.emailFieldState.email}
          inputValueHandler={queryContext.emailFieldHandler} />
        {
          queryContext.emailFieldState.emailFieldError &&
          <span className={`appendTop5 font12 latoBold ${queryContext.emailFieldState.emailFieldError ? "redText" : ""}`}>
            {queryContext.emailFieldState.emailFieldErrorMessage}
          </span>
        }
      </div>

      <div className="mobileNumberWrapper">
        <div className="makeFlex latoBold capText appendBottom10">
          <label htmlFor="enterOtp" className="detailsInput">
            Phone
          </label>
        </div>
        <div className={`mobileInputWrapper ${queryContext.mobileNumberFieldState.mobileNumberFieldError ? "redBorder" : ""}`}>
          <div
            className="countryDropdown"
            onClick={queryContext.countryChangeHandler}
            onKeyDown={queryContext.countryChangeHandler}
            tabIndex={0}>
            <span className={`queryFormBgProperties countryFlag ${queryContext.countryCodeObj.flagName}`}></span>
            <span className="countryCode">{queryContext.countryCodeObj.code}</span>
            <span className={`appendLeft70 blueArrow ${arrowActiveClass}`}></span>
          </div>
          {
            queryContext.dropdownStates.showCountryDropdown &&
            <div className="countryCodeWrapper">
              {
                countryCodeList.map((countryList, index) => {
                  return (
                    <div
                      tabIndex={0}
                      key={index}
                      className="countryList"
                      onKeyDown={(event) => queryContext.selectCountryHandler(event, countryList, index)}
                      onClick={(event) => queryContext.selectCountryHandler(event, countryList, index)}>
                      <span className={`queryFormBgProperties countryFlag ${countryList.flagName}`}></span>
                      <p className="countryDetailsWrapper">
                        <span className="countryName">
                          {countryList.countryName}
                        </span>
                        <span className="countryCode">{countryList.code}</span>
                      </p>
                    </div>
                  )
                })
              }
            </div>
          }
          <input
            type="number"
            min="0"
            placeholder="Enter phone no."
            value={queryContext.mobileNumberFieldState.mobileNumber}
            onChange={queryContext.mobileNumberFieldHandler}
            onKeyDown={queryContext.mobileNumberFieldHandler}
            className="mobileNumber"
          />
        </div>
        {
          queryContext.mobileNumberFieldState.mobileNumberFieldError &&
          <span
            className={`appendTop5 font12 latoBold ${queryContext.mobileNumberFieldState.mobileNumberFieldError ? "redText" : ""
              }`}>
            {queryContext.mobileNumberFieldState.mobileNumberFieldErrorMessage}
          </span>
        }
      </div>
    </div>
  )
}

export default UserDetails;
