import React, { useContext } from 'react';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import './SearchCity.css';

const SearchCity = ({ placeholder, value, inputHandler, isMobile, closeSearchModal, cityList }) => {

    const queryContext = useContext(QueryFormContext);

    return (
        <div className="searchCityWrapper">
            <div className="makeFlex relative padding5">
                <span className={`queryFormBgProperties ${isMobile ? ' backArrowGrey left ' : 'citySearchIcon'}`} onClick={isMobile ? closeSearchModal : ''}></span>
                <input type="text" className="citySearchInput" placeholder={placeholder} value={value} onChange={inputHandler} autoFocus />
                {isMobile && <span className="latoBold linkText font12 clear">clear</span>}
            </div>
            {
                <div className="listWrapper">
                    {
                        cityList.map((name, index) => {
                            return (
                                <div
                                    tabIndex={0}
                                    key={index}
                                    className={`makeFlex hrtlCenter name ${(placeholder === "fromCity" && queryContext.travelFieldState.toCity === name) || (placeholder === "toCity" && queryContext.travelFieldState.fromCity === name) ? 'disabled' : ''} `}
                                    onClick={(placeholder === "fromCity" && queryContext.travelFieldState.toCity === name) || (placeholder === "toCity" && queryContext.travelFieldState.fromCity === name) ? '' : (event) => queryContext.selectDropdownHandler(event, name, placeholder)}
                                    onKeyDown={(placeholder === "fromCity" && queryContext.travelFieldState.toCity === name) || (placeholder === "toCity" && queryContext.travelFieldState.fromCity === name) ? '' : (event) => queryContext.selectDropdownHandler(event, name, placeholder)}>
                                    <span className="appendLeft5">{name}</span>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default SearchCity;
