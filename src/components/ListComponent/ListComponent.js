import React, {useState, useEffect} from 'react';
import List from "./List";
import Pagination from '../Pagination/Pagination';
import "./ListComponent.css"

const defaultListItemNo = 10;

function ListComponent({pageSize, currentDate, currentCountry}) {
    const [data, setData] = useState({value:[]})
    const [list, setList] = useState({value:[]})
    const [totalPages, setTotalPages] = useState(1);
    const [currentPageNo, setCurrentPageNo] = useState(1);
    
    useEffect(() => {
            const currentList = data.value.slice((currentPageNo-1)*defaultListItemNo, currentPageNo*defaultListItemNo);
            setList({value:currentList});     

    },[currentPageNo, data])

    useEffect(()=> {
        setCurrentPage(1);
        const url = !currentCountry ? 
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${currentDate}`
        : `https://wikimedia.org/api/rest_v1/metrics/pageviews/top-per-country/${currentCountry}/all-access/${currentDate}`
    
        fetch(url)
        .then(res => res.json())
        .then(res => {
            const resdata = res.items[0].articles
            const page = 1;
            const pageData = resdata.slice((page * pageSize) - pageSize, page * pageSize);
            setData({value:pageData})
            const page_size = Math.ceil(pageSize/defaultListItemNo)
            setTotalPages(page_size)
            const currentList = pageData.slice((page-1)*defaultListItemNo, page*defaultListItemNo);
            setList({value:currentList}); 
        })
        .catch(err => {
            throw new Error(err);
       })
    },[pageSize, currentDate, currentCountry])

    const setCurrentPage = (value) => {
        if (value === "<" && currentPageNo > 1) {
            setCurrentPageNo(currentPageNo-1);
        } else if(value === ">" && currentPageNo < totalPages) {
            setCurrentPageNo(currentPageNo+1)
        } else {
         setCurrentPageNo(value)
        }
    }

  return (
    <div className='ListComponent'>
        <div className='Flex-item'>
            <List list={list.value} />
        </div>
        <div className='Pagination Flex-item'>
            <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPageNo={currentPageNo} />
        </div>
    </div>
  );
}

export default ListComponent;



