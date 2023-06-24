import React, { Component } from "react";
export class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            Shared by <i className="fa fa-love" />
            <a href="https://bootstrapthemes.co">BootstrapThemes</a>
          </div>
        </footer>
        {/* <div id="preloader">
          <div id="status"></div>
        </div> */}
      </>
    );
  }
}

export default Footer;
