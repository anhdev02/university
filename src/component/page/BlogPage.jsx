import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Blog from "../home/Blog";
export class BlogPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Blog/>
        <Footer />
      </>
    );
  }
}

export default BlogPage;