import React, { useContext } from 'react';
import MonthCalendar from '../../common/Calendar/MonthCalendar';
import SelectDateOverlay from '../../common/Calendar/SelectDateOverlay';
import InputRadio from '../../common/InputRadio/InputRadio';
import InputText from '../../common/InputText/InputText';
import SearchCity from '../../common/SearchCity/SearchCity';
import QueryFormContext from '../../queryFormContext/QueryFormContext';

const TravelDetails = () => {

    const queryContext = useContext(QueryFormContext);
    const isMobile = window.innerWidth < 767 ? true : false;

    return (
        <div className="travellerWrapper">
            <div className="makeFlex flexWrap">
                <div className="fromCityWrapper">
                    <InputText
                        labelName="Starting From"
                        placeHolderValue="Enter City"
                        classes={`startingFromInput ${queryContext.travelFieldState.fromCityFieldError ? "redBorder" : ""}`}
                        searchHandler={() => queryContext.searchHandler('fromCity')}
                        value={queryContext.travelFieldState.fromCity} >
                        {isMobile && queryContext.travelFieldState.fromCity !=='' && <span className="change" onClick={() => queryContext.searchHandler('fromCity')}>change</span>}
                    </InputText>
                    {
                        queryContext.travelFieldState.fromCityFieldError &&
                        <span
                            className={`appendTop5 font12 latoBold ${queryContext.travelFieldState.fromCityFieldError ? "redText" : ""
                                }`}>
                            {queryContext.travelFieldState.fromCityFieldErrorMessage}
                        </span>
                    }
                </div>
                {
                    queryContext.showSearchCityFor === "fromCity" &&
                    <SearchCity
                        placeholder="fromCity"
                        value={queryContext.searchedValue}
                        inputHandler={queryContext.inputHandler}
                        isMobile={isMobile}
                        cityList={queryContext.filteredData}
                        closeSearchModal={queryContext.closeSearchModal} />
                }
                <div className="toCityWrapper">
                    <InputText
                        labelName="Travelling To"
                        placeHolderValue="Enter City"
                        classes={`travellingToInput ${queryContext.travelFieldState.toCityFieldError ? "redBorder" : ""}`}
                        searchHandler={() => queryContext.searchHandler('toCity')}
                        value={queryContext.travelFieldState.toCity}>
                        {isMobile && queryContext.travelFieldState.toCity !=='' && <span className="change" onClick={() => queryContext.searchHandler('toCity')}>change</span>}
                    </InputText>
                    {
                        queryContext.travelFieldState.toCityFieldError &&
                        <span
                            className={`appendTop5 font12 latoBold ${queryContext.travelFieldState.toCityFieldError ? "redText" : ""
                                }`}>
                            {queryContext.travelFieldState.toCityFieldErrorMessage}
                        </span>
                    }
                    {
                        queryContext.showSearchCityFor === "toCity" &&
                        <SearchCity
                            placeholder="toCity"
                            value={queryContext.searchedValue}
                            inputHandler={queryContext.inputHandler}
                            isMobile={isMobile}
                            cityList={queryContext.filteredData}
                            closeSearchModal={queryContext.closeSearchModal} />
                    }
                </div>
            </div>
            <div className="radioInputWrapper">
                <p className="radioText">Is your date fixed?</p>
                <div className="radioInput">
                    <label className="appendRight15 pointer">
                        <InputRadio
                            inputName="fixedDate"
                            radioChangeHandler={(event) => queryContext.radioChangeHandler(event, 'days')}
                            checkRadio={queryContext.calendarTypeToShow == "days"} />
                        <span
                            tabIndex={0}
                            className="appendLeft5"
                            onClick={(event) => queryContext.radioChangeHandler(event, "days")}
                            onKeyDown={(event) => queryContext.radioChangeHandler(event, "days")}>
                            Yes
                        </span>
                    </label>
                    <label className="pointer">
                        <InputRadio
                            inputName="fixedDate"
                            radioChangeHandler={(event) => queryContext.radioChangeHandler(event, "months")}
                            checkRadio={queryContext.calendarTypeToShow == "months"} />
                        <span
                            tabIndex={0}
                            className="appendLeft5"
                            onClick={(event) => queryContext.radioChangeHandler(event, "months")}
                            onKeyDown={(event) => queryContext.radioChangeHandler(event, "months")}>
                            No
                        </span>
                    </label>
                </div>
            </div>
            <div className='calendarWrapper'>
                <p className="appendBottom10 dateText">Enter your expected travel date</p>
                <div
                    tabIndex={0}
                    className={`dateBoxWrapper ${queryContext.travelFieldState.selectedDateFieldError ? "redBorder" : ""}`}
                    onClick={queryContext.calendarFlagHandler}
                    onKeyDown={queryContext.calendarFlagHandler}>
                    <span className="selectedDate">{queryContext.travelFieldState.selectedDate}</span>
                    <span className="queryFormBgProperties calendarIcon"></span>
                </div>
                {
                    queryContext.travelFieldState.selectedDateFieldError &&
                    <span
                        className={`appendTop5 font12 latoBold ${queryContext.travelFieldState.selectedDateFieldError ? "redText" : ""
                            }`}>
                        {queryContext.travelFieldState.selectedDateFieldErrorMessage}
                    </span>
                }
            </div>
            {queryContext.calendarTypeToShow === "days" && queryContext.calendarFlag && <SelectDateOverlay from={queryContext.fromDate} updateFromDate={queryContext.updateFromDate} />}
            {queryContext.calendarTypeToShow === "months" && queryContext.calendarFlag && <MonthCalendar monthSelectionHandler={queryContext.monthSelectionHandler} selectedDate={queryContext.travelFieldState.selectedDate} />}
        </div>
    )
}

export default TravelDetails;
