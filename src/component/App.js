import React, { Component } from "react";
import Product from "./productDisplay";
import Header from "./Header";
import JSON from "./db.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      productData: JSON,
      filteredData: JSON,
    };
  }

  filterData = (keyword) => {
    let output = this.state.productData.filter((data) => {
      return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      console.log("in filtet", output);
    });
    this.setState({ filteredData: output });
  };

  render() {
    return (
      <>
        <Header
          userInput={(data) => {
            this.filterData(data);
          }}
        ></Header>
        <Product propData={this.state.filteredData} />
      </>
    );
  }
}
export default App;
