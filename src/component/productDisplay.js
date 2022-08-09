import React from "react";
import './product.css';

const Product = (props) =>{

    const productData = props.propData.map((item)=>{
           return(
            <div className="card">
                <img src={item.image} alt={item.name}></img>
                <div>
                   <h3>{item.name}</h3>
                   <h4>{item.uses}</h4>
                   <h4>{item.description}</h4>
                   <h4>{item.discount}</h4>
                </div>
            </div>
           )
    })

    return(
        <div className="main">
            {productData}
        </div>
        
    )
}
export default Product;