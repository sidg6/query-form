import React, { Component } from 'react';
import DayPicker from './DayPicker';

class SelectDateOverlay extends Component {

	render() {
		const isMobile = window.innerWidth < 767 ? true : false;
		return (
			<div className="dayPickerWrap animated visible slideUpEffect">
				<DayPicker from={this.props.from} updateFromDate={this.props.updateFromDate} />
				{isMobile && <span className="doneBtn font14">Done</span>}
			</div>
		);
	}
}

export default SelectDateOverlay;
