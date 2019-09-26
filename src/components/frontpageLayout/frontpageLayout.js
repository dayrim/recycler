import React, { Component } from "react";
import { Topmenu, Footer } from "../../components";

class Layout extends Component {
  render() {
    return (
      <div>
        <Topmenu />
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;
