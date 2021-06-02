import React from 'react';

const QueryFormContext = React.createContext({
    getBtnActive: false,
    activeTabIndex: 0,
    activeAccordionName: { 0: 'userdetails' },
    completedStepsList: [],
    countryCodeObj: {},
    showSearchCityFor: '',
    calendarTypeToShow: 'days',
    calendarFlag: false,
    fromDate: '',
    searchedValue: '',
    filteredData: [],
    nameFieldState: {
        name: '',
        nameFieldError: false,
        nameFieldErrorMessage: ''
    },
    emailFieldState: {
        email: '',
        emailFieldError: false,
        emailFieldErrorMessage: ''
    },
    mobileNumberFieldState: {
        mobileNumber: '',
        mobileNumberFieldError: false,
        mobileNumberFieldErrorMessage: ''
    },
    travelFieldState: {
        fromCity: '',
        fromCityFieldError: false,
        fromCityFieldErrorMessage: '',
        toCity: '',
        toCityFieldError: false,
        toCityFieldErrorMessage: '',
        selectedDate: '',
        selectedDateFieldError: false,
        selectedDateFieldErrorMessage: ''
    },
    dropdownStates: {
        showDropdown: false,
        showCountryDropdown: false,
    },
    selectDropdownHandler: () => { },
    countryChangeHandler: () => { },
    getCallBackButtonHandler: () => { },
    nameFieldHandler: () => { },
    emailFieldHandler: () => { },
    mobileNumberFieldHandler: () => { },
    accordionHandler: () => { },
    editDetailsHandler: () => { },
    selectCountryHandler: () => { },
    radioChangeHandler: () => { },
    updateFromDate: () => { },
    calendarFlagHandler: () => { },
    searchHandler: () => { },
    inputHandler: () => { },
    monthSelectionHandler: () => { },
    closeSearchModal: () => { },
    clearSearchHandler: () => { },
    calendarDoneBtnHandler: () => { }
});

export default QueryFormContext;
