import React from 'react';
import DatePickerComponent from '../DatePicker/DatePicker';
import NumPickerComponent from '../NumPicker/NumPickerComponent';
import CountryPickerComponent from "../CountryPicker/CountryPickerComponent"
import "./ActionBar.css"

function ActionBar({getPageSize, setSelectedDate, currentDate, setCountry, currentYM}) {
  return (
    <>
    <div className='ActionBar'>
        <div className='DatePicker Flex-item'>
            <DatePickerComponent setSelectedDate={setSelectedDate} currentDate={currentDate} />
        </div>
        <div className='NumCount Flex-item'>
            <NumPickerComponent getPageSize={getPageSize} />
        </div>
        <div className='SearchButton Flex-item'>
            <button className="primary">Search</button>
        </div>
    </div>
    <div className='ActionBarS'>
    <div className='CountryPicker Flex-item'>
            <CountryPickerComponent setCountry={setCountry} currentYM={currentYM} />
        </div>
    </div>
    </>
  );
}


export default ActionBar;



