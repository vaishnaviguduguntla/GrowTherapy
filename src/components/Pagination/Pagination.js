import React from 'react';
import Circle from "../Circle/circle"
import "./Pagination.css";


function Pagination({totalPages, setCurrentPage, currentPageNo}) {
  return <ul className='PaginationBar'>
    <Circle  className="Fixed" value="<" setCurrentPage={setCurrentPage} disabled={currentPageNo === 1} />
    <ul className='Scrollable'>
    {[...Array(totalPages)].map((value,i) => <Circle value={i+1} setCurrentPage={setCurrentPage}  />)}
    </ul>
    <Circle value=">" className="Fixed" setCurrentPage={setCurrentPage} currentPageNo={currentPageNo} disabled={currentPageNo === totalPages}/>
  </ul>
}

export default Pagination;