import React, {useState} from 'react';
import './Categories.css';


const Categories = ({items}) => {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-2 g-4 mx-auto mt-2">

               {
                   items.map((menuItem) => {
                       const {id,title,price,img,description} = menuItem;
                       return (
                        <div className="col col-11 mx-auto my-2" key={id}>
                              <div className="card mb-3">
                              <div className="row g-0">
                              <div className="col-md-4">
                               <img src={img} className="card-img-top" alt="item" />
                             </div>
                             <div className="col-md-8">
                             <div className="card-body">
                             <h5 className="card-title">{title}...... ${price}</h5>
                            <p className="card-text">{description}</p>
                       </div>
                       </div>
                       </div>
                   </div>
                   </div>
                       )

                   })
               }
           </div>
        </>
    )
}

export default Categories;