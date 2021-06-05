import menu from './Menudata';
import Menu from './Menu';
import Categories from './Categories';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import React,{ useState } from 'react';


const allCategories =['All',...new Set(menu.map((item) => item.category))];


function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  //filterItems
  const filterItems = (category) => {
   
    if(category === 'All'){
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter((items) => 
     items.category === category )
    setMenuItems(newItems)
  }

  return (
    <div className="App my-5">
     <h1 className="mytext">Our Menu</h1>
     <div className="container-fluid">
      <Menu categoryy={categories} filterItems={filterItems} />
      <div className="row">
       <div className="col-md-9 col-12 my-2 mx-auto myclass">
       <div className="row mx-auto">
         <div className="col-md-9 col-10 my-3 mx-auto">
           <Categories items={menuItems}/>
           </div>
         </div>
      </div>
       </div>
       </div>
     </div>
    
  );
}

export default App;
