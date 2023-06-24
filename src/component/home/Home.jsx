import React, { Component } from "react";
import SliderImg from "../../img/dream-slider.jpg";
import Icon1 from "../../img/page1_icon1.png";
import Icon2 from "../../img/page1_icon2.png";
import Icon3 from "../../img/page1_icon3.png";
import Arch from "../../img/architechture.jpg";
import Engi from "../../img/engineerning.jpg";
import Stud from "../../img/eco-student.jpg";
import Engl from "../../img/english.jpg";
import Math from "../../img/math-natural.jpg";
import Phar from "../../img/pharmecy.jpg";
import Pic3 from "../../img/page1_pic3.jpg";
import Pic1 from "../../img/page1_pic1.jpg";
import Pic2 from "../../img/page1_pic2.jpg";
import Pic4 from "../../img/page1_pic4.jpg";
import Blog1 from "../../img/blog1.jpg";
import Blog2 from "../../img/blog2.jpg";
import Blog3 from "../../img/blog3.jpg";
import Kate from "../../img/kate_01.png";
import Studen from "../../img/student.png";
import Badge from "../../img/badge.png";
import Diploma from "../../img/diploma.png";
import WOW from "wowjs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReactTextRotator from "react-text-rotator";

const content = [
  {
    text: "ONLINE EDUCATION",
    animation: "dissolve",
  },
  {
    text: "INTERNATIONS SCHOOL",
    animation: "dissolve",
  },
  {
    text: "PROGRESSIVE PROGRAM",
    animation: "dissolve",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8e8a8a" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#8e8a8a", zIndex: "999" }}
      onClick={onClick}
    />
  );
}


export class Home extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    const settings = {
      dots: true,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <>
        <div>
          <div className="du-banner-area">
            <div className="du-featured-photo">
              <img
                className="img-responsive"
                src={SliderImg}
                alt="featured photo"
              />
              <div className="du-featured-text">
                <header className="welcome-message text-center">
                  <h1>
                    {/* <span className="rotate">
                      ONLINE EDUCATION, INTERNATIONS SCHOOL,PROGRESSIVE PROGRAM{" "}
                    </span> */}
                    <ReactTextRotator
                      content={content}
                      time={2000}
                      transitionTime={50}
                    />
                  </h1>
                </header>
              </div>
            </div>
          </div>
          <div className="clear" />
          <div className="dream-university">
            {/*Begin feature*/}
            <div className="du-feature">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="du-feature-box wow fadeIn">
                      <div className="badge">
                        <img src={Icon1} alt="" />
                      </div>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <p className="title">Progressive Programs</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectscing elit.
                            Maecenas moleset alldbus id ictum. Ut neque purus,
                            sollic alitudin non ante ac, malesuada. condimentum
                            libero.{" "}
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-4 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div className="du-feature-box animated">
                      <div className="badge">
                        <img src={Icon2} alt="" />
                      </div>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <p className="title">online education</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectscing elit.
                            Maecenas moleset alldbus id ictum. Ut neque purus,
                            sollic alitudin non ante ac, malesuada. condimentum
                            libero.{" "}
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-4 col-sm-4 wow fadeIn"
                    data-wow-delay="0.2s"
                  >
                    <div className="du-feature-box">
                      <div className="badge">
                        <img src={Icon3} alt="" />
                      </div>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <p className="title">International students</p>
                          <p>
                            Lorem ipsum dolor sit amet, consectscing elit.
                            Maecenas moleset alldbus id ictum. Ut neque purus,
                            sollic alitudin non ante ac, malesuada. condimentum
                            libero.{" "}
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End feature */}
            {/*Begin our faculty*/}
            <div className="our-faculty">
              <div className="container">
                <h2 className="center">Our Faculty:</h2>
                <p className="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="du-faculty-item wow fadeInLeft">
                      <figure>
                        <a href="#">
                          <img
                            className="img-responsive"
                            src={Arch}
                            alt="image"
                          />
                        </a>
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>
                            <a href="#">Architecture</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <figure>
                        <a href="#">
                          <img
                            className="img-responsive"
                            src={Engi}
                            alt="image"
                          />
                        </a>
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>
                            <a href="#">Engineering</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <a href="#">
                          <img src={Stud} alt="image" />
                        </a>
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>
                            <a href="#">Economics and Social Sciences</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <a href="#">
                          <img src={Engl} alt="image" />
                        </a>
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>
                            <a href="#">English and Humanities</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <a href="#">
                          <img src={Math} alt="image" />
                        </a>
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>
                            <a href="#">Mathematics and Natural Sciences</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <a href="#">
                          <img src={Phar} alt="" />
                        </a>
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>
                            <a href="#">Pharmacy</a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End our faculty*/}
            {/*Begin for student */}
            <div className="for-students">
              <div className="container">
                <h2 className="center">For student:</h2>
                <p className="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="du-faculty-item wow fadeInLeft">
                      <figure>
                        <img src={Pic1} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Attendance procedure</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectscing elit.
                            Maecenas moleset alldbus id ictum. Ut neque purus,
                            sollic alitudin non ante ac, malesuada. condimentum
                            libero.
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <figure>
                        <img src={Pic2} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Health &amp; Help</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectscing elit.
                            Maecenas moleset alldbus id ictum. Ut neque purus,
                            sollic alitudin non ante ac, malesuada. condimentum
                            libero.
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-faculty-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <img src={Pic3} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Course Selection</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectscing elit.
                            Maecenas moleset alldbus id ictum. Ut neque purus,
                            sollic alitudin non ante ac, malesuada. condimentum
                            libero.
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End for student*/}
            {/*Begin news */}
            <div className="du-news">
              <div className="container">
                <h2 className="center">News:</h2>
                <p className="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="du-news-item wow fadeInLeft">
                      <figure>
                        <img className="img-responsive" src={Blog1} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Gulf Today Report On KGS Carnival – 2015</h3>
                          <p>
                            Including families, pupils and people from different
                            walks of life have attended the ‘Fun For Cause’
                            carnival organised by The Kindergarten Starters.
                          </p>
                          <a href="#">
                            <img src="img/more_arrow1.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-news-item wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <figure>
                        <img className="img-responsive" src={Blog2} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Blue Ribbon Award for the year 2014-2015</h3>
                          <p>
                            Excellence is never an accident. It is always the
                            result of high intention and intelligent execution;
                            it represents the wise choice of many alternatives.
                          </p>
                          <a href="#">
                            <img src="img/more_arrow1.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-news-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <img className="img-responsive" src={Blog3} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>The KGS Kindness Mural and Friendship</h3>
                          <p>
                            At The Kindergarten Starters, we tried several ways
                            of bringing a little joy to the less privileged
                            members of our society, as part of our SEWA
                            endeavours.
                          </p>
                          <a href="#">
                            <img src="img/more_arrow1.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End news*/}
            {/*Begin success story */}
            <div className="du-graduate-success-story">
              <div className="container">
                <h2 className="center">Students success Story:</h2>
                <p className="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
                <div className="row">
                  <div className="cbp-l-slider-testimonials-wrap">
                    <div className="cbp-panel" style={{ maxWidth: "980px" }}>
                      <div
                        id="grid-container"
                        className="cbp-l-grid-slider-testimonials cbp-slider-edge"
                      >
                        <Slider {...settings}>
                          <div className="cbp-item graphic">
                            <div className="du-best-student">
                              <figure>
                                <img src="assets/img/kate_01.png" alt="" />
                              </figure>
                            </div>
                            <div className="cbp-l-grid-slider-testimonials-body">
                              “Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis eu libero scelerisque ligula sagittis
                              faucibus eget quis lacus. Suspendisse sodales sed
                              orci ac feugiat”
                            </div>
                            <div className="cbp-l-grid-slider-testimonials-footer">
                              <p className="bodytext">
                                <b>Name:</b> Titus
                                <br />
                                <b>Degree:&nbsp;</b> History and French
                                <br />
                                <b>University:</b> University of York
                              </p>
                            </div>
                          </div>
                          <div className="cbp-item web-design logos">
                            <div className="du-best-student">
                              <figure>
                                <img src="assets/img/chris.png" alt="" />
                              </figure>
                            </div>
                            <div className="cbp-l-grid-slider-testimonials-body">
                              “Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis eu libero scelerisque ligula sagittis
                              faucibus eget quis lacus. Suspendisse sodales sed
                              orci ac feugiat”
                            </div>
                            <div className="cbp-l-grid-slider-testimonials-footer">
                              <p className="bodytext">
                                <b>Name:</b> Chris
                                <br />
                                <b>Degree:&nbsp;</b> Mathematics
                                <br />
                                <b>University:</b> Cardiff
                              </p>
                            </div>
                          </div>
                          <div className="cbp-item graphic logos">
                            <div className="du-best-student">
                              <figure>
                                <img src="assets/img/darren.png" alt="" />
                              </figure>
                            </div>
                            <div className="cbp-l-grid-slider-testimonials-body">
                              “Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Duis eu libero scelerisque ligula sagittis
                              faucibus eget quis lacus. Suspendisse sodales sed
                              orci ac feugiat”
                            </div>
                            <div className="cbp-l-grid-slider-testimonials-footer">
                              <p className="bodytext">
                                <b>Name:</b> Darren
                                <br />
                                <b>Degree:&nbsp;</b> Mathematics
                                <br />
                                <b>University:</b> University of Manchester
                              </p>
                            </div>
                          </div>
                        </Slider>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*End success story*/}
            {/*Begin scholarship */}
            <div className="du-scholarship">
              <div className="container">
                <h2 className="center">Recent Scholarship:</h2>
                <p className="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="du-scholarship-item wow fadeInLeft">
                      <figure>
                        <img src={Studen} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Graduate Scholarships</h3>
                          <p>
                            <span>
                              <strong>Deadline: Dec 17 2015 &nbsp;</strong>
                            </span>
                            <span>Type: Annual</span>
                          </p>
                          <p>
                            Including families, pupils and people from different
                            walks of life have attended the ‘Fun For Cause’
                            carnival organised by The Kindergarten Starters.
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-scholarship-item wow fadeInLeft"
                      data-wow-delay="0.2s"
                    >
                      <figure>
                        <img src={Badge} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>Postgraduate Scholarships</h3>
                          <p>
                            <span>
                              <strong>Deadline: Dec 17 2015 &nbsp;</strong>
                            </span>
                            <span>Type: Annual</span>
                          </p>
                          <p>
                            Excellence is never an accident. It is always the
                            result of high intention and intelligent execution;
                            it represents the wise choice of many alternatives.
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div
                      className="du-scholarship-item wow fadeInRight"
                      data-wow-delay="0.4s"
                    >
                      <figure>
                        <img src={Diploma} alt="" />
                      </figure>
                      <div className="du-caption-box">
                        <div className="du-caption">
                          <h3>International Postgraduate Scholarships</h3>
                          <p>
                            <span>
                              <strong>Deadline: Dec 17 2015 &nbsp;</strong>
                            </span>
                            <span>Type: Annual</span>
                          </p>
                          <p>
                            At The Kindergarten Starters, we tried several ways
                            of bringing a little joy to the less privileged
                            members .
                          </p>
                          <a
                            href="#"
                            className="btn-default du-common-property"
                          >
                            Apply Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End scholarship*/}
            {/*Begin current news */}
            <div className="du-current-news center">
              <div className="container">
                <h2 className="center">Upcoming Event:</h2>
                <p className="center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
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
                          elitsf tell. Mauris feugiat vari dghus elit, a commodo
                          libero dicuij futumty pottor estibulum egestas egestas
                          erat et iaculis.
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
                <a href="#" className="btn-default du-common-property">
                  event
                </a>
              </div>
            </div>
            <div className="du-newsletter">
              <div className="container">
                <h2 className="wow fadeInUp">newsletter sign up</h2>
                <p className="wow fadeInUp">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  eu libero scelerisque ligula sagittis faucibus eget quis
                  lacus. <br />
                  Suspendisse sodales sed orci ac feugiat.{" "}
                </p>
                <div className="row">
                  <div className="col-lg-12 wow fadeInUp">
                    <form id="newsletter" acceptCharset="utf-8">
                      <div className="success">
                        Your subscribe request has been sent!
                      </div>
                      <label className="email">
                        <input type="email" defaultValue="Enter Your E-mail:" />
                        <span className="error">
                          *This is not a valid email address.
                        </span>
                      </label>
                      <br />
                      <a href="#" data-type="submit">
                        Subscribe
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
