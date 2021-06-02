import React, { useState, useEffect } from 'react';
import Button from './common/Button/Button';
import OtpModal from './modals/OtpModal/OtpModal';
import PlanningHolidayModal from './modals/PlanningHolidayModal/PlanningHolidayModal';
import PlanningHolidayModalV2 from './modals/PlanningHolidayModal/PlanningHolidayModalV2';
import SimilarRequestModal from './modals/SimilarRequestModal/SimilarRequestModal';
import ThankYouModal from './modals/ThankYouModal/ThankYouModal';
import ThankYouModalV2 from './modals/ThankYouModal/ThankYouModalV2';
import QueryFormContext from "./queryFormContext/QueryFormContext";
import { countryCodeList, dropdownListData } from './QueryFormData';
import './QueryFormMainPage.css';

const QueryFormMainPage = () => {

    let date = new Date();
    const isMobile = window.innerWidth < 480 ? true : false;
    const [visibleModal, setVisibleModal] = useState('');
    const [activateGetButton, setActivateGetButton] = useState(false);
    const [name, setName] = useState('');
    const [nameFieldError, setNameFieldError] = useState(false);
    const [nameFieldErrorMessage, setNameFieldErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [emailFieldError, setEmailFieldError] = useState(false);
    const [emailFieldErrorMessage, setEmailFieldErrorMessage] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [mobileNumberFieldError, setMobileNumberFieldError] = useState(false);
    const [mobileNumberFieldErrorMessage, setMobileNumberFieldErrorMessage] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeAccordionName, setActiveAccordionName] = useState({ 0: 'userdetails' });
    const [selectedCountryObj, setSelectedCountryObj] = useState(countryCodeList[0]);
    const [completedStepsList, setCompletedStepsList] = useState([]);
    const [fromCity, setFromCity] = useState('');
    const [fromCityFieldError, setFromCityFieldError] = useState(false);
    const [fromCityFieldErrorMessage, setFromCityFieldErrorMessage] = useState('');
    const [toCity, setToCity] = useState('');
    const [toCityFieldError, setToCityFieldError] = useState(false);
    const [toCityFieldErrorMessage, setToCityFieldErrorMessage] = useState('');
    const [selectedDate, setSelectedDate] = useState('Enter Date');
    const [selectedDateFieldError, setSelectedDateFieldError] = useState(false);
    const [selectedDateFieldErrorMessage, setSelectedDateFieldErrorMessage] = useState('');
    const [showSearchCityFor, setShowSearchCityFor] = useState('');
    const [calendarTypeToShow, setCalendarTypeToShow] = useState('days');
    const [calendarFlag, updateCalendarFlag] = useState(false);
    const [fromDate, setFromDate] = useState(date);
    const [searchedValue, updateSearchedValue] = useState('');
    const [filteredData, setFilteredData] = useState([...dropdownListData]);
    const daysOption = { year: "numeric", month: "short", day: "numeric" };
    const monthsOption = { year: "numeric", month: "short" };

    useEffect(() => {
        if (calendarTypeToShow !== "months" && activeAccordionName[activeTabIndex] === "traveldetails") {
            setSelectedDate(fromDate.toLocaleDateString('en-GB', daysOption));
        }
    }, [fromDate]);

    const showModalHandler = (event, modalName) => {
        setVisibleModal(modalName);
    }

    const hideModal = (event) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setVisibleModal('');
            resetForm();
        }
    };

    const resetForm = () => {
        setName('');
        setNameFieldError(false);
        setNameFieldErrorMessage('');
        setEmail('');
        setEmailFieldError(false);
        setEmailFieldErrorMessage('');
        setMobileNumber('');
        setMobileNumberFieldError(false);
        setMobileNumberFieldErrorMessage('');
        setActiveTabIndex(0);
        setActiveAccordionName({ 0: 'userdetails' });
        setSelectedCountryObj(countryCodeList[0]);
        setCompletedStepsList([]);
        setFromCity('');
        setToCity('');
        setSelectedDate('Enter Date');
        setCalendarTypeToShow('days');
        setActivateGetButton(false);
        setFromDate(date);
    }

    const getCallBackButtonHandler = () => {
        if (!Object.values(validateUserDetails()).includes(false) && !Object.values(validateTravelDetails()).includes(false)) {
            setVisibleModal("thankYouV2");
        }
    };

    const nameFieldHandler = (event) => {
        let nameRegex = /^[a-zA-Z\s]+[a-zA-Z\s]$/;
        let name = event.target.value;
        if (name === '') {
            setNameFieldError(true);
            setName(name);
            setNameFieldErrorMessage("This field is required.");
        } else if (nameRegex.test(name.trim()) === false && name.trim().length >= 3) {
            setNameFieldError(true);
            setName(name);
            setNameFieldErrorMessage("This field can only contains characters and spaces.");
        } else if (name.trim().length < 3) {
            setNameFieldError(true);
            setName(name);
            setNameFieldErrorMessage("The minimum length of the name is three.");
        } else {
            setNameFieldError(false);
            setName(name);
            setNameFieldErrorMessage('');
        }
    }

    const emailFieldHandler = (event) => {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
        let email = event.target.value.trim();
        if (email === '') {
            setEmailFieldError(true);
            setEmail(email);
            setEmailFieldErrorMessage("This field is required.");
        } else if (emailRegex.test(email) === false) {
            setEmailFieldError(true);
            setEmail(email);
            setEmailFieldErrorMessage("Enter valid email address");
        } else {
            setEmailFieldError(false);
            setEmail(email);
            setEmailFieldErrorMessage('');
        }
    }

    const mobileNumberFieldHandler = (event) => {
        let mobileNumberRegex = /^\d{10}$/;
        let mobileNumber = event.target.value.trim();
        if (event.keyCode === 69) {
            event.preventDefault();
        } else if (mobileNumber === '') {
            setMobileNumberFieldError(true);
            setMobileNumber(mobileNumber);
            setMobileNumberFieldErrorMessage("This field is required.");
        } else if (mobileNumber.length > 10) {
            setMobileNumberFieldError(true);
            setMobileNumber(mobileNumber);
            setMobileNumberFieldErrorMessage("Mobile number must be of ten digit.");
        }
        else if (mobileNumberRegex.test(mobileNumber) === false) {
            setMobileNumberFieldError(true);
            setMobileNumber(mobileNumber);
            setMobileNumberFieldErrorMessage("Enter a valid phone number.");
        } else {
            setMobileNumberFieldError(false);
            setMobileNumber(mobileNumber);
            setMobileNumberFieldErrorMessage('');
        }
    }

    const validateUserDetails = () => {
        let userValidation = {}
        if (name !== '' && !nameFieldError) {
            userValidation["name"] = true;
        } else {
            userValidation["name"] = false;
        }
        if (email !== '' && !emailFieldError) {
            userValidation["email"] = true;
        } else {
            userValidation["email"] = false;
        }
        if (mobileNumber !== '' && !mobileNumberFieldError) {
            userValidation["mobileNumber"] = true;
        } else {
            userValidation["mobileNumber"] = false;
        }
        return userValidation;
    }

    const validateTravelDetails = () => {
        let travelValidation = {};
        if (fromCity !== '' && !fromCityFieldError) {
            travelValidation["fromCity"] = true;
        } else {
            travelValidation["fromCity"] = false;
        }
        if (toCity !== '' && !toCityFieldError) {
            travelValidation["toCity"] = true;
        } else {
            travelValidation["toCity"] = false;
        }
        if (selectedDate !== 'Enter Date' && !selectedDateFieldError) {
            travelValidation["selectedDate"] = true;
        } else {
            travelValidation["selectedDate"] = false;
        }
        return travelValidation;
    }

    const accordionHandler = (event, activeValueIndex, activeDetailsName, previousTabName) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            let userValidations = validateUserDetails();
            let travelValidation = validateTravelDetails();
            if (previousTabName === "userdetails") {
                if (Object.values(userValidations).includes(false)) {
                    setEmailFieldError(userValidations.email ? false : true);
                    setMobileNumberFieldError(userValidations.mobileNumber ? false : true);
                    setNameFieldError(userValidations.name ? false : true);
                    setEmailFieldErrorMessage(userValidations.email ? "" : "This field is required.");
                    setMobileNumberFieldErrorMessage(userValidations.mobileNumber ? "" : "This field is required.");
                    setNameFieldErrorMessage(userValidations.name ? "" : "This field is required.");
                    setCompletedStepsList(completedStepsList.filter(list => list !== previousTabName));
                } else {
                    setActiveTabIndex(activeValueIndex);
                    let updateAccordion = {};
                    updateAccordion[activeValueIndex] = activeDetailsName.toLowerCase();
                    setCompletedStepsList([...completedStepsList.filter(list => list !== previousTabName), previousTabName]);
                    setActiveAccordionName(updateAccordion);
                }
            }
            if (previousTabName === "traveldetails") {
                if (Object.values(travelValidation).includes(false)) {
                    setFromCityFieldError(travelValidation.fromCity ? false : true);
                    setToCityFieldError(travelValidation.toCity ? false : true);
                    setSelectedDateFieldError(travelValidation.selectedDate ? false : true);
                    setFromCityFieldErrorMessage(travelValidation.fromCity ? "" : "This field is required.");
                    setToCityFieldErrorMessage(travelValidation.toCity ? "" : "This field is required.");
                    setSelectedDateFieldErrorMessage(travelValidation.selectedDate ? "" : "This field is required.");
                    setCompletedStepsList(completedStepsList.filter(list => list !== previousTabName));
                } else {
                    setActiveTabIndex(activeValueIndex);
                    let updateAccordion = {};
                    updateAccordion[activeValueIndex] = activeDetailsName.toLowerCase();
                    setCompletedStepsList([...completedStepsList.filter(list => list !== previousTabName), previousTabName]);
                    setActiveAccordionName(updateAccordion);
                }
            }
            if (previousTabName === "additionaldetails") {
                setActiveTabIndex(activeValueIndex);
                let updateAccordion = {};
                updateAccordion[activeValueIndex] = activeDetailsName.toLowerCase();
                setActiveAccordionName(updateAccordion);
            }
            if (!Object.values(userValidations).includes(false) && !Object.values(travelValidation).includes(false)) {
                setActivateGetButton(true);
            }
        }
    }

    const editDetailsHandler = (activeValueIndex, activeDetailsName, retainDetails) => {
        setActiveTabIndex(activeValueIndex);
        let updateAccordion = {};
        updateAccordion[activeValueIndex] = activeDetailsName.toLowerCase();
        setCompletedStepsList([retainDetails]);
        setActiveAccordionName(updateAccordion);
    }

    const countryChangeHandler = (event) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setShowCountryDropdown(!showCountryDropdown);
            if (!showCountryDropdown) {
                setShowDropdown(!showCountryDropdown);
            } else {
                setShowDropdown(false);
            }
        }
    }

    const selectCountryHandler = (event, countryObj, index) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setSelectedCountryObj(countryObj);
            countryChangeHandler(event);
        }
        if (event.keyCode === 40 && index < countryCodeList.length - 1) {
            document.getElementsByClassName('countryList')[index + 1].focus();
        }
        if (event.keyCode === 38 && index !== 0) {
            document.getElementsByClassName('countryList')[index - 1].focus();
        }
    }

    const selectDropdownHandler = (event, name, setValue) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            if (setValue === "fromCity") {
                setFromCity(name);
                setFromCityFieldError(false);
                setFromCityFieldErrorMessage('');
                { !isMobile && searchHandler("toCity"); }
            }
            if (setValue === "toCity") {
                setToCity(name);
                setToCityFieldError(false);
                setToCityFieldErrorMessage('');
                { !isMobile && setShowSearchCityFor(''); }
            }
            { isMobile && setShowSearchCityFor(''); }
            setFilteredData(dropdownListData);
            updateSearchedValue('');
            setShowDropdown(false);
        }
    }

    const radioChangeHandler = (event, calendarType) => {
        setCalendarTypeToShow(calendarType);
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setCalendarTypeToShow(calendarType);
            if (calendarType === "months") {
                setSelectedDate(fromDate.toLocaleDateString('en-GB', monthsOption));
                setSelectedDateFieldErrorMessage('');
                setSelectedDateFieldError(false);
            } else {
                setSelectedDate(fromDate.toLocaleDateString('en-GB', daysOption));
                setSelectedDateFieldErrorMessage('');
                setSelectedDateFieldError(false);
            }
            updateCalendarFlag(false);
        }
    }

    const updateFromDate = (event, from) => {
        setFromDate(from);
        { !isMobile && updateCalendarFlag(false); }
        setSelectedDateFieldErrorMessage('');
        setSelectedDateFieldError(false);
        setShowDropdown(false);
    }

    const calendarDoneBtnHandler = () => {
        updateCalendarFlag(false)
    }

    const calendarFlagHandler = (event) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            updateCalendarFlag(!calendarFlag);
            if (!calendarFlag) {
                setShowDropdown(true);
            } else {
                setShowDropdown(false);
            }
        }
    }

    const searchHandler = (showSearch) => {
        setShowSearchCityFor(showSearch);
        updateSearchedValue('');
        if (showSearch === '') {
            setShowDropdown(false);
        } else {
            setShowDropdown(true);
        }
    }

    const inputHandler = (event) => {
        updateSearchedValue(event.target.value);
        let searchedCity = event.target.value;
        if (searchedCity === '') {
            setFilteredData(dropdownListData);
        } else {
            let myReg = new RegExp(searchedCity.toLowerCase() + ".*");
            let cityArray = dropdownListData.filter(city => {
                return city.toLowerCase().match(myReg);
            });
            setFilteredData(cityArray);
        }
    }

    const monthSelectionHandler = (event, month, year) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setSelectedDate(month + " " + year);
            updateCalendarFlag(false);
            setSelectedDateFieldErrorMessage('');
            setSelectedDateFieldError(false);
            setShowDropdown(false);
        }
    }

    const closeSearchModal = () => {
        setShowSearchCityFor('');
    }

    const clearSearchHandler = () => {
        updateSearchedValue('');
        setFilteredData(dropdownListData);
    }

    return (
        <div className="queryFormWrapper">
            <h1 className="textCenter queryHeading">Query Form Modal</h1>
            <ul className={`buttonList ${visibleModal !== '' ? 'hide' : ''}`}>
                <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="Planning Holiday"
                        showInfo={"planningHoliday"}
                        handleClick={showModalHandler}
                    />
                </li>
                <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="Planning Holiday V2"
                        showInfo={"planningHolidayV2"}
                        handleClick={showModalHandler}
                    />
                </li>
                {/* <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="Similar Request1"
                        showInfo={"similarRequest1"}
                        handleClick={showModalHandler}
                    />
                </li>
                <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="Similar Request2"
                        showInfo={"similarRequest2"}
                        handleClick={showModalHandler}
                    />
                </li>
                <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="OTP"
                        showInfo={"otpModal"}
                        handleClick={showModalHandler}
                    />
                </li>
                <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="Thank You"
                        showInfo={"thankYou"}
                        handleClick={showModalHandler}
                    />
                </li>
                <li className="appendBottom10">
                    <Button
                        tabIndex={1}
                        btnTxt="Thank You V2"
                        showInfo={"thankYouV2"}
                        handleClick={showModalHandler}
                    />
                </li> */}
            </ul>

            <QueryFormContext.Provider
                value={{
                    getBtnActive: activateGetButton,
                    activeTabIndex: activeTabIndex,
                    activeAccordionName: activeAccordionName,
                    completedStepsList: completedStepsList,
                    countryCodeObj: selectedCountryObj,
                    showSearchCityFor: showSearchCityFor,
                    calendarTypeToShow: calendarTypeToShow,
                    calendarFlag: calendarFlag,
                    fromDate: fromDate,
                    searchedValue: searchedValue,
                    filteredData: filteredData,
                    clearSearchHandler: clearSearchHandler,
                    nameFieldState: {
                        name: name,
                        nameFieldError: nameFieldError,
                        nameFieldErrorMessage: nameFieldErrorMessage,
                    },
                    emailFieldState: {
                        email: email,
                        emailFieldError: emailFieldError,
                        emailFieldErrorMessage: emailFieldErrorMessage,
                    },
                    mobileNumberFieldState: {
                        mobileNumber: mobileNumber,
                        mobileNumberFieldError: mobileNumberFieldError,
                        mobileNumberFieldErrorMessage: mobileNumberFieldErrorMessage,
                    },
                    travelFieldState: {
                        fromCity: fromCity,
                        fromCityFieldError: fromCityFieldError,
                        fromCityFieldErrorMessage: fromCityFieldErrorMessage,
                        toCity: toCity,
                        toCityFieldError: toCityFieldError,
                        toCityFieldErrorMessage: toCityFieldErrorMessage,
                        selectedDate: selectedDate,
                        selectedDateFieldError: selectedDateFieldError,
                        selectedDateFieldErrorMessage: selectedDateFieldErrorMessage
                    },
                    dropdownStates: {
                        showDropdown: showDropdown,
                        showCountryDropdown: showCountryDropdown
                    },
                    selectDropdownHandler: selectDropdownHandler,
                    countryChangeHandler: countryChangeHandler,
                    getCallBackButtonHandler: getCallBackButtonHandler,
                    nameFieldHandler: nameFieldHandler,
                    emailFieldHandler: emailFieldHandler,
                    mobileNumberFieldHandler: mobileNumberFieldHandler,
                    accordionHandler: accordionHandler,
                    editDetailsHandler: editDetailsHandler,
                    selectCountryHandler: selectCountryHandler,
                    radioChangeHandler: radioChangeHandler,
                    updateFromDate: updateFromDate,
                    calendarFlagHandler: calendarFlagHandler,
                    searchHandler: searchHandler,
                    inputHandler: inputHandler,
                    monthSelectionHandler: monthSelectionHandler,
                    closeSearchModal: closeSearchModal,
                    calendarDoneBtnHandler: calendarDoneBtnHandler
                }}
            >
                {
                    visibleModal === 'planningHoliday' && <PlanningHolidayModal onRequestClose={hideModal} />
                }
                {
                    visibleModal === 'planningHolidayV2' && <PlanningHolidayModalV2 onRequestClose={hideModal} />
                }
                {
                    visibleModal === 'similarRequest1' && <SimilarRequestModal onRequestClose={hideModal} />
                }
                {
                    visibleModal === 'similarRequest2' && <SimilarRequestModal onRequestClose={hideModal} showMultiSelect={true} />
                }
                {
                    visibleModal === 'otpModal' && <OtpModal onRequestClose={hideModal} showMultiSelect={true} />
                }
                {
                    visibleModal === 'thankYou' && <ThankYouModal onRequestClose={hideModal} />
                }
                {
                    visibleModal === 'thankYouV2' && <ThankYouModalV2 onRequestClose={hideModal} />
                }
            </QueryFormContext.Provider>
        </div>
    )
}

export default QueryFormMainPage;
