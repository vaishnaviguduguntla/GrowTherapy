import React from 'react';
import "./ListItem.css";


function ListItem({item, viewDetails}) {
  return <li key={item.rank}>
  <span className='rank'>{item.rank}</span>
  <span className='articleTitle'>{item.article}</span>
  <span className='views'>{item.views || item.views_ceil} views</span>
  <button className='details' onClick={() => viewDetails(item)}>view details</button>
</li>
}

export default ListItem;