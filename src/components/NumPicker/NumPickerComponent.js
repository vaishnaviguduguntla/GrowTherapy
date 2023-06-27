import React from 'react';
import {  RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from "react-icons/ai"
import "./NumPickerComponent.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

  
function CustomNumPickerInput({ getPageSize }) {
  const options = [
    25, 50, 75,100, 200
  ];
  const defaultOption = options[0];
    return (
      <div className="Numpicker-input">
        <label className='LabelTitle'>Num Results <RiArrowDropDownLine /></label>
        <Dropdown options={options}  selected={defaultOption} placeholder="Select an option" onChange={getPageSize} />
        <div className="Numpicker-icon">
          <AiOutlineUnorderedList />
        </div>
      </div>
    );
  }

  
const NumPickerComponent = ({getPageSize}) => {
 
  return (
    <div>
      <CustomNumPickerInput getPageSize={getPageSize} />
    </div>
  );
};


export default NumPickerComponent;
