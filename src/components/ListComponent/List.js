import React, {useState} from 'react';
import ListItem from "./ListItem";
import DetailsViewModal from "../DetailsViewModal"

function List({list}) {
    const [show, setShow] = useState(false)
    const [currentItem, setCurrentItem] = useState(null)
    const viewDetails = (item) => {
         setCurrentItem(item)
         setShow(true)
    }
  return (
    <React.Fragment>
    <ul className='List'>
        {
            list.length && list.map(item => <ListItem item={item} viewDetails={viewDetails}/>)
        }
    </ul>
    <DetailsViewModal show={show} onClose={()=>{setShow(false)}} currentItem={currentItem}  />
    </React.Fragment>
  );
}

export default List;



