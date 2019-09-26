import React, { Component } from "react";
import { Footer } from "../../components";

class Layout extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <Footer></Footer>
      </div>
    );
  }
}

export default Layout;
