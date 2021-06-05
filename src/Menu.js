import React from 'react';
import './Menu.css';


const Menu = ({categoryy,filterItems}) => {
    return (
        <div>
        <div className="mt-4">
        {
            categoryy.map((myresult,index)=> {
                return <button className="mybutton" key={index}
                onClick={()=> filterItems(myresult)}>{myresult}</button>
            })
        }
        </div>
        </div>
    )
}

export default Menu;