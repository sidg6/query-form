import React, { useState } from 'react';
import './MonthCalendar.css';

const MONTHS = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

const MonthCalendar = ({ monthSelectionHandler, selectedDate }) => {

    const date = new Date();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const [selYear, setSelYear] = useState(year);
    const [showNextArrow, setShowNextArrow] = useState(true);
    const [showPrevArrow, setShowPrevArrow] = useState(false);

    const handleNextYear = (event) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setSelYear(year + 1);
            setShowNextArrow(false);
            setShowPrevArrow(true);
        }
    }

    const handlePreviousYear = (event) => {
        if (event.keyCode === 13 || event.keyCode === undefined) {
            setSelYear(year);
            setShowNextArrow(true);
            setShowPrevArrow(false);
        }
    }
    return (
        <React.Fragment>
            <div className="customMonthCalendar">
                <div className="makeFlex hrtlCenter spaceAround padding10">
                    <span
                        tabIndex={0}
                        className={`queryFormBgProperties prevArrow ${showPrevArrow ? 'show' : 'hide'}`}
                        onClick={(event) => handlePreviousYear(event)}
                        onKeyDown={(event) => handlePreviousYear(event)}>
                    </span>
                    <span className="latoBold blackText">{selYear}</span>
                    <span
                        tabIndex={0}
                        className={`queryFormBgProperties nextArrow ${showNextArrow ? 'show' : 'hide'}`}
                        onClick={(event) => handleNextYear(event)}
                        onKeyDown={(event) => handleNextYear(event)}>
                    </span>
                </div>
                <div className="makeFlex flexWrap vrtlCenter monthWrap">
                    {
                        MONTHS.map((month, index) => {
                            return (
                                <div
                                    tabIndex={selYear === year && index <= monthIndex ? -1 : 0}
                                    key={index}
                                    className={`latoBold padding10 font16 grey97 monthName ${selectedDate.split(' ')[0].toLowerCase() === month.toLowerCase() && Number(selectedDate.split(' ')[1]) === Number(selYear) ? ' active' : ''} ${selYear === year && index < monthIndex ? 'disabled' : ''}`}
                                    onClick={(event) => monthSelectionHandler(event, month, selYear)}
                                    onKeyDown={(event) => monthSelectionHandler(event, month, selYear)}>
                                    {month}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="arrowDown"></div>
        </React.Fragment>

    )
}

export default MonthCalendar;
