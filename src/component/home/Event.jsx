import React, { Component } from "react";
import Pic4 from '../../img/page1_pic4.jpg'
import WOW from "wowjs";
export class Event extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="dream-university-subpage">
        {/* Begin breadcrumbs*/}
        <div className="du-page-header du-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-12 text-left du-title">
                <div className="du-breadcrumb-title">
                  <h3>Event</h3>
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-12 text-right du-breadcrumb">
                <div className="breadcrumbs">Event page</div>
              </div>
            </div>
          </div>
        </div>
        {/* End breadcrumbs*/}
        {/* Begin Event */}
        <div className="du-subpage-content">
          <div className="du-event">
            {/* Begin choose us */}
            <section className="event ptb-50">
              <div style={{padding: '0', backgroundColor: '#fff'}} className="du-current-news center">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                      <h2>All Event</h2>
                      <p>
                        Morbi condimentum, nunc non ornare dignissim, tellus eros
                        molestie turpis, eu vehicula metus quam ac tellus aenean
                        cursus massa in nulla suscipit lacinia in at eros.
                      </p>
                    </div>
                  </div>
                  <section className="du-all-event">
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-12 col-sm-12 du-news-date-box wow fadeInRight"
                        data-wow-delay="0.2s"
                      >
                        <div>
                          <div className="badge">
                            22 <span>jun</span>
                            <strong>
                              6 <img src="img/page1_icon4.png" alt="" />
                            </strong>
                          </div>
                          <div className="du-date-short-des">
                            <p>
                              Lorem ipsum dolor sit amedgit, consectetur adipscing
                              elitsf tell. Mauris feugiat vari dghus elit, a
                              commodo libero dicuij futumty pottor estibulum
                              egestas egestas erat et iaculis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                        <figure>
                          <img src={Pic4} alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-12 col-sm-12 du-news-date-box wow fadeInRight"
                        data-wow-delay="0.2s"
                      >
                        <div>
                          <div className="badge">
                            24 <span>jun</span>
                            <strong>
                              6 <img src="img/page1_icon4.png" alt="" />
                            </strong>
                          </div>
                          <div className="du-date-short-des">
                            <p>
                              Lorem ipsum dolor sit amedgit, consectetur adipscing
                              elitsf tell. Mauris feugiat vari dghus elit, a
                              commodo libero dicuij futumty pottor estibulum
                              egestas egestas erat et iaculis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                        <figure>
                          <img src={Pic4} alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-12 col-sm-12 du-news-date-box wow fadeInRight"
                        data-wow-delay="0.2s"
                      >
                        <div>
                          <div className="badge">
                            14 <span>jun</span>
                            <strong>
                              6 <img src="img/page1_icon4.png" alt="" />
                            </strong>
                          </div>
                          <div className="du-date-short-des">
                            <p>
                              Lorem ipsum dolor sit amedgit, consectetur adipscing
                              elitsf tell. Mauris feugiat vari dghus elit, a
                              commodo libero dicuij futumty pottor estibulum
                              egestas egestas erat et iaculis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                        <figure>
                          <img src={Pic4} alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-12 col-sm-12 du-news-date-box wow fadeInRight"
                        data-wow-delay="0.2s"
                      >
                        <div>
                          <div className="badge">
                            20 <span>jun</span>
                            <strong>
                              3 <img src="img/page1_icon4.png" alt="" />
                            </strong>
                          </div>
                          <div className="du-date-short-des">
                            <p>
                              Lorem ipsum dolor sit amedgit, consectetur adipscing
                              elitsf tell. Mauris feugiat vari dghus elit, a
                              commodo libero dicuij futumty pottor estibulum
                              egestas egestas erat et iaculis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                        <figure>
                          <img src={Pic4} alt="" />
                        </figure>
                      </div>
                    </div>
                    <div className="row">
                      <div
                        className="col-lg-4 col-md-12 col-sm-12 du-news-date-box wow fadeInRight"
                        data-wow-delay="0.2s"
                      >
                        <div>
                          <div className="badge">
                            29 <span>jun</span>
                            <strong>
                              9 <img src="img/page1_icon4.png" alt="" />
                            </strong>
                          </div>
                          <div className="du-date-short-des">
                            <p>
                              Lorem ipsum dolor sit amedgit, consectetur adipscing
                              elitsf tell. Mauris feugiat vari dghus elit, a
                              commodo libero dicuij futumty pottor estibulum
                              egestas egestas erat et iaculis.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 wow fadeInLeft">
                        <figure>
                          <img src={Pic4} alt="" />
                        </figure>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </section>
            {/* End event */}
          </div>
          {/* /.du-event */}
        </div>
        {/* /.du-subpage content */}
        {/* End Evnet */}
      </div>
    );
  }
}
export default Event;
