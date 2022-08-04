import React from "react";

const Product = (props) =>{

    const productData = props.propData.map((item)=>{
           return(
            <h1>Hi</h1>
           )
    })

    return(
        <div>
            {productData}
        </div>
        
    )
}
export default Product;