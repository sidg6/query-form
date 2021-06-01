import React, { useContext } from 'react';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import './RequestReceived.css';

const RequestReceived = () => {
    const queryContext = useContext(QueryFormContext);
    let requestLocation = queryContext.travelFieldState.toCity !== '' ? queryContext.travelFieldState.toCity + " - " + queryContext.travelFieldState.selectedDate : "Kerala - Mar, 2021";
    return (
        <div className="requestReceivedWrapper">
            <div className="makeFlex spaceBetween">
                <div className="makeFlex column">
                    <span className="requestHeading ">Request Received</span>
                    <span className="requestLocation">{requestLocation}</span>
                </div>
                <span className="queryFormBgProperties checkMarkIcon"></span>
            </div>
        </div>
    )
}

export default RequestReceived;
