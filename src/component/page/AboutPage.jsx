import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import About from "../home/About";
export class AboutPage extends Component {
  render() {
    return (
      <>
        <Header />
        <About/>
        <Footer />
      </>
    );
  }
}

export default AboutPage;