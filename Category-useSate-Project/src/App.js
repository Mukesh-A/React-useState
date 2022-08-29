import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allcategory =['all', ...new Set(items.map((item)=> item.category))]

console.log(allcategory)
function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categoriess, setCategories] = useState(allcategory)

  const filterItems = (category)=>{
    if(category === "all"){
     return setMenuItems(items)
    }
      const newItems = items.filter((item)=> item.category === category)
      setMenuItems(newItems)
  }

  return <main>
    <section className="menu section">
      <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories = {categoriess}/>
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;
