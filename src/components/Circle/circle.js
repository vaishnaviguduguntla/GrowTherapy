import React from 'react';
import "./circle.css";


function Circle({value, setCurrentPage, disabled}) {
    console.log(value)
  return <li className='circle'><button className="NoStyleButton" onClick={()=>setCurrentPage(value)} disabled={disabled}>{value}</button></li>
}

export default Circle;