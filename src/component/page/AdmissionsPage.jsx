import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Admission from "../home/Admissions";
export class AdmissionsPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Admission/>
        <Footer />
      </>
    );
  }
}

export default AdmissionsPage;