import React from 'react';
import items from './data';

const Categories = ({filterItems,categories}) => {

 
  return  <div className="btn-container">
    {
      categories.map((item,index)=> {
        return <button className="filter-btn" key={index} onClick={()=> filterItems(item)}>{item}</button>
      })
    }
  
  </div>
};

export default Categories;
