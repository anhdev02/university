import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Home from "../home/Home";
export class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}

export default HomePage;
