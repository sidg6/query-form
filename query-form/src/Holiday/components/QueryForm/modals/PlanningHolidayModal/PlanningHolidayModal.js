import React, { useContext } from 'react';
import AccordionWrapper from '../../common/AccordionWrapper/AccordionWrapper';
import Button from '../../common/Button/Button';
import CustomModalWrapper from '../../common/CustomModalWrapper/CustomModalWrapper';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import { fieldsTextData } from '../../QueryFormData';
import './PlanningHolidayModal.css';

const PlanningHolidayModal = (props) => {

    const queryContext = useContext(QueryFormContext);

    let modalState = {
        "userdetails": (event) => queryContext.countryChangeHandler(event),
        "traveldetails": queryContext.showSearchCityFor !== '' ? () => queryContext.searchHandler('') : (event) => queryContext.calendarFlagHandler(event)
    }

    return (
        <CustomModalWrapper width={632} classes="planningHolidayModelWrapper">
            <span className="queryFormBgProperties closeIcon" tabIndex={0} onClick={props.onRequestClose} onKeyDown={props.onRequestClose}></span>
            <header className="heading">
                Need help planning your holiday?
            </header>
            <div className="content">
                {
                    fieldsTextData.map((fieldData, index) => {
                        return <AccordionWrapper key={index} fieldData={fieldData} index={index} activeTabIndex={queryContext.activeTabIndex} />
                    })
                }
            </div>
            <footer>
                <p className="disclaimer">
                    By submitting this form, you authorize makemytrip.com, it's partners & marketplace sellers to contact you for this enquiry.
                </p>
                <Button
                    btnTxt="Get a callback"
                    btnStyleName={queryContext.getBtnActive ? "blue" : 'disabled'}
                    handleClick={queryContext.getCallBackButtonHandler}
                    containerStyle={{
                        padding: '13px 25px',
                        textTransform: 'uppercase',
                        boxShadow: '0 1px 7px 0 rgba(0, 0, 0, 0.2)'
                    }} />
                <div className="namasteWrapper">
                    <div>
                        <p className="namasteText">We’re ready to help you plan your holiday</p>
                        <p className="counts">650+ Agents  | 40 Lac+ Travelers | 65+ Destinations</p>
                    </div>
                    <span className="namasteIcon"></span>
                </div>
            </footer>
            {queryContext.dropdownStates.showDropdown && <div className="dropdownOverlay" onClick={modalState[queryContext.activeAccordionName[queryContext.activeTabIndex]]}></div>}
        </CustomModalWrapper>
    )
}

export default PlanningHolidayModal;
