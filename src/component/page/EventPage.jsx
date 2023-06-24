import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Event from "../home/Event";
export class EventPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Event/>
        <Footer />
      </>
    );
  }
}

export default EventPage;