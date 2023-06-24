import React, { Component } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import BlogSingle from "../home/BlogSingle";
export class BlogSinglePage extends Component {
  render() {
    return (
      <>
        <Header />
        <BlogSingle/>
        <Footer />
      </>
    );
  }
}

export default BlogSinglePage;