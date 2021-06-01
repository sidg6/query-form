import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default class MMTDatepicker extends React.Component {

  constructor(props) {
    super(props);
    this.getInitialState = this.getInitialState.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      from: this.props.from,
    };
  }

  handleDayClick(day, { disabled }, event) {
    const { from } = this.state;
    const { updateFromDate } = this.props;

    if (disabled) {
      return;
    }
    this.setState({
      from: day,
    });

    this.props.updateFromDate(event, day);
    updateFromDate(event, day);
  }

  render() {
    const { from } = this.state;
    const modifiers = { start: this.state.from };
    const isMobile = window.innerWidth < 767 ? true : false;
    const today = new Date();
    return (
      <React.Fragment>
        {isMobile &&
          <DayPicker
            numberOfMonths={12}
            selectedDays={from}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
          />}
        {!isMobile &&
          <DayPicker
            numberOfMonths={1}
            selectedDays={from}
            modifiers={modifiers}
            onDayClick={this.handleDayClick}
            disabledDays={{ before: today }}
            month={new Date(this.props.from.getFullYear(), this.props.from.getMonth())}
          />}
      </React.Fragment>
    );
  }
}
