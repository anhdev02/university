import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div className="dream-university-subpage">
        {/* Begin breadcrumbs*/}
        <div className="du-page-header du-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-12 text-left du-title">
                <div className="du-breadcrumb-title">
                  <h3>Contact</h3>
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-12 text-right du-breadcrumb">
                <div className="breadcrumbs">Contact page</div>
              </div>
            </div>
          </div>
        </div>
        {/* End breadcrumbs*/}
        {/* Begin Contact */}
        <div className="du-subpage-content">
          <div className="du-contact">
            <div className="du-google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3304.8335505155337!2d-84.302295!3d34.073780899999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575af70986d89%3A0x765a219a57ed595c!2s2020+Willshire+Glen%2C+Alpharetta%2C+GA+30009%2C+USA!5e0!3m2!1sen!2sbd!4v1427483431399"
                width={600}
                height={450}
                frameBorder={0}
                style={{ border: 0 }}
              />
            </div>
            {/* /.lan-google-map*/}
            {/* Begin choose us */}
            <section className="contact ptb-50">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 text-left">
                    <h3>We’d Love to Hear From You, Lets Get In Touch!</h3>
                    <p>
                      Morbi condimentum, nunc non ornare dignissim, tellus eros
                      molestie turpis, eu vehicula metus quam ac tellus aenean
                      cursus massa in nulla suscipit lacinia in at eros.Morbi
                      condimentum, nunc non ornare dignissim, tellus eros
                      molestie turpis, eu vehicula metus quam ac tellus aenean
                      cursus massa in nulla suscipit lacinia in at eros.
                    </p>
                  </div>
                </div>
                <section className="du-contact-form">
                  <div className="row">
                    <div className="col-md-9">
                      <div className="row du-contact-form">
                        <form>
                          <div className="form-group col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Name *"
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email *"
                            />
                          </div>
                          <div className="form-group col-md-4">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Subject"
                            />
                          </div>
                          <div className="col-md-12">
                            <textarea
                              className="form-control"
                              rows={9}
                              placeholder="Message"
                              defaultValue={"\t\t\t\t\t\t\t\t\t\t\t"}
                            />
                            <button
                              type="submit"
                              className="btn-default du-common-property"
                            >
                              Send message
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="widget">
                        <h3 className="widget-title">Social Networks</h3>
                        <ul className="social social-boxed">
                          <li>
                            <a href="#">
                              <i className="fa fa-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-vimeo-square" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-youtube" />
                            </a>
                          </li>
                        </ul>
                        {/* /.social*/}
                      </div>
                      {/* /.widget */}
                      <div
                        id="contact-info-widget"
                        className="widget contact-info"
                      >
                        <div className="heading">
                          <h3>Contact Info</h3>
                        </div>
                        <div className="contact-info-container">
                          <span className="address">
                            2020 Willshire Glen,
                            <br />
                            Alpharetta, GA-30009
                          </span>
                          <br />
                          <br />
                          <span className="phone">Phone: 1.800.555.6789</span>
                          <br />
                          <span className="email">
                            Email: <a href="#">support@dreamuniversity.com</a>
                          </span>
                          <br />
                          <span className="web">
                            Web: <a href="#">dreamuniversity.com</a>
                          </span>
                        </div>
                      </div>
                      {/* /.end info */}
                    </div>
                  </div>
                </section>
              </div>
            </section>
            {/* End contact*/}
          </div>
          {/* /.du-contact */}
        </div>
      </div>
    );
  }
}

export default Contact;
