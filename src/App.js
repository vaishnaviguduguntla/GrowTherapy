import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './App.css'; // You can create this file if you want to add custom styles
import ActionBar from './components/ActionBar/ActionBar';
import ListComponent from "./components/ListComponent/ListComponent"
const defaultPageSize = 25;

let ydate = new Date();
ydate.setDate(ydate.getDate() - 1)
const defaultDate= `${ydate.getFullYear()}/${("0" + (ydate.getMonth() + 1)).slice(-2)}/${("0" + ydate.getDate()).slice(-2)}`
const defaultYM = `${ydate.getFullYear()}/${("0" + (ydate.getMonth() + 1)).slice(-2)}`;
console.log(defaultDate)

function App() {
  
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentDate, setCurrentDate] = useState(defaultDate)
  const [currentYM, setCurrentYM] = useState(defaultYM)
  const [currentCountry, setCurrentCountry] = useState(null);
  const getPageSize = (value) => {
      setPageSize(value.value);
  }
  const setSelectedDate = (value) => {
    var date = new Date(value);
    setCurrentCountry(null);
    setCurrentDate(`${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}/${("0" + date.getDate()).slice(-2)}`)
    setCurrentYM(`${date.getFullYear()}/${("0" + (date.getMonth() + 1)).slice(-2)}`);
  }
  const setCountry = (value) => {
       setCurrentCountry(value.value)
  }

  return (
    <div className="container">
      <div className='header'></div>
      <div className="body">
        <div className='Title'>Top Wikipedia articles</div>
        <ActionBar getPageSize={getPageSize} setSelectedDate={setSelectedDate} currentDate={ydate} currentYM={currentYM} setCountry={setCountry} />
        <ListComponent pageSize={pageSize} currentDate={currentDate} currentCountry={currentCountry} />
      </div>
    </div>
  );
}


export default App;
