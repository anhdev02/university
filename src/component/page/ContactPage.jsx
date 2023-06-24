import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Contact from "../home/Contact";

export class ContactPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Contact/>
        <Footer />
      </>
    );
  }
}

export default ContactPage;