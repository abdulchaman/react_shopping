import React, {Component} from "react";
import Product from "./productDisplay";
import Header from "./Header";
import JSON from "./db.json"

class App extends Component{
    constructor(){
        super();
        this.state={
            productData:JSON
        }
    }

    render(){
        return(
           <>
           <Header></Header>
              <Product propData={this.state.productData}/>
           </>
           
                          
        )
    }

}
export default App;