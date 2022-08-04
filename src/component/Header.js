import React, {Component} from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state ={
            logo:"Amazon"
        }
    }
    handleClick = (event) =>{
        this.setState({logo:"Flipkart"})
    }

    render(){
        return(
            <>
              <h1>{this.state.logo}</h1>  
              <button onClick={this.handleClick}></button>
            </>
        )
    }
}
export default Header;