import React, {Component} from 'react';
import "./Header.css"

class Header extends Component{
    constructor(){
        super();
        this.state ={
            logo:"Amazon",
            keyword:"foo"
        }
    
    }
    handleChange = (event) =>{
        // this.setState({logo:"Flipkart"});
        // this.setState({keyword:event.target.value})
        this.props.userInput(event.target.value);
    }

    render(){
        return(
            <>
           <header>
           <h3 className='logo'>{this.state.logo}</h3>
           <input type="text" onChange={this.handleChange}></input>
          
           </header>

            </>
        )
    }
}
export default Header;