import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Faculty from "../home/Faculty";
export class FacultyPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Faculty/>
        <Footer />
      </>
    );
  }
}

export default FacultyPage;