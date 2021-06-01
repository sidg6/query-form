import React, { useContext, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import Button from '../../common/Button/Button';
import CustomModalWrapper from '../../common/CustomModalWrapper/CustomModalWrapper';
import AdditionalDetails from '../../components/AdditionalDetails/AdditionalDetails';
import TravelDetails from '../../components/TravelDetails/TravelDetails';
import UserDetails from '../../components/UserDetails/UserDetails';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import { fieldsTextData2 } from '../../QueryFormData';
import './PlanningHolidayModal.css';
import './PlanningHolidayModalV2.css';

const PlanningHolidayModalV2 = (props) => {

    const queryContext = useContext(QueryFormContext);
    const isMobile = window.innerWidth < 480 ? true : false;

    let modalState = {
        "userdetails": queryContext.countryChangeHandler,
        "traveldetails": queryContext.showSearchCityFor !== '' ? () => queryContext.searchHandler('') : queryContext.calendarFlagHandler
    }

    return (
        <CustomModalWrapper width={632} classes="planningHolidayModelWrapper planningHolidayModalWrapperV2">
            <span className="queryFormBgProperties closeIcon" onClick={props.onRequestClose}></span>
            <header className="heading">
                Need help planning your holiday?
            </header>
            <div className="content">
                {
                    queryContext.activeAccordionName[queryContext.activeTabIndex] === 'userdetails' &&
                    <React.Fragment>
                        <div className="makeFlex column pointer">
                            <div className="accordianSubHeading">{ReactHtmlParser(fieldsTextData2[queryContext.activeTabIndex].heading)}</div>
                        </div>
                        <div className="detailsBoxWrapper">
                            <UserDetails />
                        </div>
                    </React.Fragment>
                }
                {
                    queryContext.completedStepsList.includes('userdetails') &&
                    <div className={`makeFlex spaceBetween hrtlCenter ${queryContext.completedStepsList.length === 1 ? 'appendBottom25' : 'appendBottom10'}`}>
                        <p className="completedStep">Ok <span className="blueText underlineText">{queryContext.nameFieldState.name}</span> we'll contact you on <span className="blueText underlineText">{queryContext.countryCodeObj.code + queryContext.mobileNumberFieldState.mobileNumber}</span> </p>
                        <p className="linkText latoBold pointer" onClick={() => queryContext.editDetailsHandler(0, "userdetails", '')}>Edit</p>
                    </div>
                }
                {
                    queryContext.activeAccordionName[queryContext.activeTabIndex] === 'traveldetails' &&
                    <React.Fragment>
                        <div className="makeFlex column pointer">
                            <div className="accordianSubHeading">{ReactHtmlParser(fieldsTextData2[queryContext.activeTabIndex].heading)}</div>
                        </div>
                        <div className="detailsBoxWrapper">
                            <TravelDetails />
                        </div>
                    </React.Fragment>
                }
                {
                    queryContext.completedStepsList.includes('traveldetails') &&
                    <div className="makeFlex spaceBetween hrtlCenter appendBottom25">
                        <p className="completedStep">for a trip to <span className="blueText underlineText">{queryContext.travelFieldState.toCity}</span> on <span className="blueText underlineText">{queryContext.travelFieldState.selectedDate}</span> </p>
                        <p className="linkText latoBold pointer" onClick={() => queryContext.editDetailsHandler(1, "traveldetails", 'userdetails')}>Edit</p>
                    </div>
                }
                {
                    queryContext.activeAccordionName[queryContext.activeTabIndex] === 'additionaldetails' &&
                    <React.Fragment>
                        <div className="makeFlex column pointer">
                            <div className="accordianSubHeading">{ReactHtmlParser(fieldsTextData2[queryContext.activeTabIndex].heading)}</div>
                        </div>
                        <div className="detailsBoxWrapper">
                            <AdditionalDetails />
                        </div>
                    </React.Fragment>
                }
            </div>
            <footer>
                <div className="makeFlex hrtlCenter appendBottom10">
                    <Button
                        btnTxt={`${queryContext.activeTabIndex !== 2 ? 'Next' : 'Get a callback'}`}
                        btnStyleName="blueGradient"
                        spriteIcon={queryContext.activeTabIndex !== 2 && !isMobile ? true : false}
                        spriteClass='queryFormBgProperties nextArrowWhite'
                        handleClick={queryContext.activeTabIndex !== 2 ? (event) => queryContext.accordionHandler(event, queryContext.activeTabIndex + 1, fieldsTextData2[queryContext.activeTabIndex + 1].componentName.toLocaleLowerCase(), fieldsTextData2[queryContext.activeTabIndex].componentName.toLocaleLowerCase()) : queryContext.getCallBackButtonHandler}
                        containerStyle={{
                            padding: queryContext.activeTabIndex !== 2 ? '13px 85px 13px 55px' : '13px 25px',
                            textTransform: 'uppercase',
                            boxShadow: '0 1px 7px 0 rgba(0, 0, 0, 0.2)'
                        }} />
                    {!isMobile && <p className="appendLeft20 travelDetailsTxt">Your travel details</p>}
                </div>
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

export default PlanningHolidayModalV2;
