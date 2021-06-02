import React, { useContext } from 'react';
import QueryFormContext from '../../queryFormContext/QueryFormContext';
import DayPicker from './DayPicker';

const SelectDateOverlay = (props) => {
	let queryContext = useContext(QueryFormContext);

	const isMobile = window.innerWidth < 767 ? true : false;
	return (
		<div className="dayPickerWrap animated visible slideUpEffect">
			<DayPicker from={props.from} updateFromDate={props.updateFromDate} />
			{isMobile && <span className="doneBtn font14" onClick={queryContext.calendarDoneBtnHandler}>Done</span>}
		</div>
	);
}

export default SelectDateOverlay;
