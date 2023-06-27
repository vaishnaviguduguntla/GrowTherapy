import React, {useState, useEffect} from 'react';
import {  RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineUnorderedList } from "react-icons/ai"
import "./CountryPickerComponet.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CountryPickerComponent = ({setCountry}) => {
    const [options, setOptions] = useState([])
    const handleCountryChange = (value) => {
        setCountry(value)
    };

  useEffect(() => {
    fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top-by-country/all-projects/all-access/2023/05`)
    .then(res => res.json())
    .then(res => {
        const countries = []
         res.items[0].countries.forEach(country => countries.push(country.country))
        setOptions(countries)  
    })
    .catch(err => {
         throw new Error(err);
    })
  },[])

  const CustomCountryPickerInput = ({ handleCountryChange }) => {
    const defaultOption = options[0];
      return (
        <div className="Countrypicker-input">
          <label className='LabelTitle'>Countries <RiArrowDropDownLine /></label>
          <Dropdown options={options}  selected={defaultOption} placeholder="Select an option" onChange={handleCountryChange} />
          <div className="Numpicker-icon">
            <AiOutlineUnorderedList />
          </div>
        </div>
      );
    }

  return (
    <div>
      <CustomCountryPickerInput handleCountryChange={handleCountryChange}  />
    </div>
  );
};


export default CountryPickerComponent;
