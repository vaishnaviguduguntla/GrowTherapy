import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { RiCalendar2Fill, RiArrowDropDownLine } from 'react-icons/ri';
import 'react-datepicker/dist/react-datepicker.css';
import "./DatePicker.css"

function CustomDatePickerInput({ value, onClick }) {
    return (
      <div className="datepicker-input">
        <label className='LabelTitle'>DATE <RiArrowDropDownLine /></label>
        <input
          type="text"
          value={value}
          onClick={onClick}
          readOnly
          placeholder="Please select Date"
        />
        <div className="datepicker-icon" onClick={onClick}>
          <RiCalendar2Fill />
        </div>
      </div>
    );
  }

const DatePickerComponent = ({setSelectedDate, currentDate}) => {
  const [selectedDate, currentSelectedDate] = useState(currentDate);

  const handleDateChange = (date) => {
    currentSelectedDate(date)
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker 
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select a date"
        customInput={<CustomDatePickerInput />} 
      />
    </div>
  );
};


export default DatePickerComponent;
