import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import AdditionalDetails from '../../components/AdditionalDetails/AdditionalDetails';
import TravelDetails from '../../components/TravelDetails/TravelDetails';
import UserDetails from '../../components/UserDetails/UserDetails';
import QueryFormContext from '../../queryFormContext/QueryFormContext';

const AccordionWrapper = ({ fieldData, index, activeTabIndex }) => {

    let componentMapping = {
        "UserDetails": UserDetails,
        "TravelDetails": TravelDetails,
        "AdditionalDetails": AdditionalDetails
    }
    const isMobile = window.innerWidth < 767 ? true : false;

    let RenderedComponent = componentMapping[fieldData.componentName];

    const queryContext = useContext(QueryFormContext);

    return (
        <React.Fragment>
            <div
                className={`makeFlex spaceBetween hrtlCenter pointer ${activeTabIndex === index ? '' : 'borderBottom2'}`}
                onClick={(event) => queryContext.accordionHandler(event, index, fieldData.componentName, queryContext.activeAccordionName[queryContext.activeTabIndex])}
                onKeyDown={(event) => queryContext.accordionHandler(event, index, fieldData.componentName, queryContext.activeAccordionName[queryContext.activeTabIndex])}
                tabIndex={0}>
                <div className="makeFlex column pointer">
                    <div className="accordianSubHeading">{fieldData.heading}</div>
                    {
                        queryContext.completedStepsList.includes(fieldData.componentName.toLowerCase()) &&
                        <p className={`infoMessageDetails ${activeTabIndex === index ? 'appendBottom10' : 'paddingB10'}`}>{ReactHtmlParser(fieldData.completedMessage)}</p>
                    }
                </div>
                {
                    (activeTabIndex !== 2 || index !== 2 || isMobile) &&
                    <span className={`appendRight10 blueArrow ${activeTabIndex === index ? 'active' : ''}`}></span>
                }
                {
                    activeTabIndex === 2 && index === 2 && !isMobile && <span className={`skipButton ${queryContext.getBtnActive ? '' : 'disabled'}`}>Skip</span>
                }
            </div>
            {
                activeTabIndex === index &&
                <React.Fragment>
                    <p className={`contactDetailsMessage ${activeTabIndex === index ? 'appendBottom10' : 'paddingB10'}`}>{ReactHtmlParser(fieldData.subHeading)}</p>
                    <div className="detailsBoxWrapper">
                        <RenderedComponent />
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    )
}

export default AccordionWrapper;
