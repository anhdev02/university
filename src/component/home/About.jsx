import React, { Component } from "react";
import Choose from '../../img/choose_us.jpg'
import Teac1 from '../../img/team/teacher1.jpg'
import Teac2 from '../../img/team/teacher2.jpg'
import Teac3 from '../../img/team/teacher3.jpg'
import Teac4 from '../../img/team/teacher4.jpg'
import Prin from '../../img/principla.png'
import WOW from "wowjs";
export class About extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
    render(){
        return(
            <div className="dream-university-subpage">
        {/* Begin breadcrumbs*/}
        <div className="du-page-header du-breadcrumbs">		
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-12 text-left du-title">
                <div className="du-breadcrumb-title"><h3>About Us</h3></div>				
              </div>
              <div className="col-md-5 col-sm-5 col-xs-12 text-right du-breadcrumb">
                <div className="breadcrumbs">
                  About page
                </div>
              </div>				
            </div>
          </div>		
        </div>
        {/* End breadcrumbs*/}
        {/* Begin About */}
        <div className="du-subpage-content">
          <div className="du-about">
            {/* Begin choose us */}
            <section className="choose-us ptb-50">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                      <h2>Why Choose Us?</h2>
                      <p>Morbi condimentum, nunc non ornare dignissim, tellus eros molestie turpis, eu vehicula metus quam
                        ac tellus aenean cursus massa in nulla suscipit lacinia in at eros.</p>
                    </div>
                  </div>
                  <section className="about-section-1">
                    <div className="du-choose-us pt-20">
                      <div className="row">
                        <div className="col-md-6 wow fadeInLeft">
                          <img width={'100%'} className="img-responsive" src={Choose} alt="image" />
                        </div>
                        <div className="col-md-6 wow fadeInRight">
                          <p>
                            Aenean cursus fermentum euismod. Cras sodales nibh sed egestas adipiscing. Vestibulum sit amet eros sapien. Vestibulum quis dapibus sem. Fusce a lacinia nisl. Mauris sagittis egestas justo. Praesent tempus quis nibh nec imperdiet.
                          </p>
                          <div className="row pt-20">
                            <div className="col-md-6">
                              <ul className="du-choose-list">
                                <li><a href="#">Lorem ipsum dolor sit adipiscing</a></li>
                                <li><a href="#">Sus ut felis orci sed triste</a></li>
                                <li><a href="#">Tristique diama phare tralibero</a></li>
                              </ul>
                            </div>
                            <div className="col-md-6">
                              <ul className="du-choose-list">
                                <li><a href="#">Adipiscing elitsus ut  felis orcise</a></li>
                                <li><a href="#">Fermentuma lorem ipsum dolor</a></li>
                                <li><a href="#">Tristique diama phare tralibero</a></li>
                              </ul>
                            </div>
                            <div className="col-md-12">
                              <a className="btn-default du-common-property" href="#">View All Features</a>
                            </div>
                          </div>
                        </div>
                      </div>						
                    </div>
                  </section>				
                </div>
            </section>
            {/* End choose us */}
            {/* Begin teacher */}
            <section className="du-teacher du-section-ash ptb-50 common">
              {/* Team Block */}
              <div className="team-content">
                {/* Container */}
                <div className="container">
                  <div className="row">
                    <h2 className="text-center">Our Teacher</h2>
                    <div className="col-md-3 col-sm-6">
                      {/* Team Box */}
                      <div className="team-box wow fadeInLeft">
                        {/* Image */}
                        <img src={Teac1} alt="" className="img-responsive" />
                        {/* Heading */}
                        <h4>Kate Pattison</h4>
                        <h5>Professor</h5>
                        <h5>Faculty : Business Management</h5>
                        {/* Social */}
                        <div className="ui-social">
                          {/* Facebook */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook facebook" /></a>
                          {/* Twitter */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter twitter" /></a>
                          {/* LinkedIn */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="LinkedIn"><i className="fa fa-linkedin linkedin" /></a>
                          {/* Google-Plus */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Google-Plus"><i className="fa fa-google-plus google-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      {/* Team Box */}
                      <div className="team-box wow fadeInLeft">
                        <img src={Teac2} alt="" className="img-responsive" />
                        {/* Heading */}
                        <h4>James Smith</h4>
                        <h5>Professor</h5>
                        <h5>Faculty : History and French</h5>
                        {/* Social */}
                        <div className="ui-social">
                          {/* Facebook */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook facebook" /></a>
                          {/* Twitter */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter twitter" /></a>
                          {/* LinkedIn */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="LinkedIn"><i className="fa fa-linkedin linkedin" /></a>
                          {/* Google-Plus */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Google-Plus"><i className="fa fa-google-plus google-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      {/* Team Box */}
                      <div className="team-box wow fadeInRight">
                        {/* IMage */}
                        <img src={Teac3} alt="" className="img-responsive" />
                        <h4>Tom Hanks</h4>
                        <h5>Professor</h5>
                        <h5>Faculty : Engineering</h5>
                        {/* Social */}
                        <div className="ui-social">
                          {/* Facebook */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook facebook" /></a>
                          {/* Twitter */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter twitter" /></a>
                          {/* LinkedIn */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="LinkedIn"><i className="fa fa-linkedin linkedin" /></a>
                          {/* Google-Plus */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Google-Plus"><i className="fa fa-google-plus google-plus" /></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      {/* Team Box */}
                      <div className="team-box wow fadeInRight">
                        {/* Image */}
                        <img src={Teac4} alt="" className="img-responsive" />
                        {/* Heading */}
                        <h4>Silvester Stalin</h4>
                        <h5>Professor</h5>
                        <h5>Faculty : Accounting </h5>
                        {/* Social */}
                        <div className="ui-social">
                          {/* Facebook */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Facebook"><i className="fa fa-facebook facebook" /></a>
                          {/* Twitter */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Twitter"><i className="fa fa-twitter twitter" /></a>
                          {/* LinkedIn */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="LinkedIn"><i className="fa fa-linkedin linkedin" /></a>
                          {/* Google-Plus */}
                          <a href="#" className="ui-tooltip" data-toggle="tooltip" data-placement="top" title="Google-Plus"><i className="fa fa-google-plus google-plus" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{/* /Container */}
              </div>{/* / Team */}				
            </section>
            {/* End teacher */}
            {/* Begin principal message */}
            <section className="du-principal-comment ptb-50 common">
              <div className="container">					
                <div className="row">
                  <h2 className="text-center">Principal Message</h2>
                  <div className="principal-photo col-md-2 wow fadeInLeft">
                    <img style={{margin: '0 auto'}} className="img-responsive" src={Prin} alt="image" />
                  </div>
                  <div className="col-md-10 wow fadeInRight">
                    <p>
                      "Aenean cursus fermentum euismod. Cras sodales nibh sed egestas adipiscing. Vestibulum sit amet eros sapien. Vestibulum quis dapibus sem. Fusce a lacinia nisl. Mauris sagittis egestas justo. Praesent tempus quis nibh nec imperdiet."
                    </p>
                    <p>
                      <span><strong>Prof. Md. John Doe</strong></span><br />	
                      <span>Principal</span><br />
                      <span>University of California, Los Angeles</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>
            {/* End principal message */}
            {/* Begin contact us */}
            <section className="du-contact du-section-ash ptb-50 common">
              <div className="container">				
                <div className="row">
                  <h2 className="text-center">General Information</h2>
                  <div className="col-md-6 wow fadeInLeft">
                    <p>
                      Aenean cursus fermentum euismod. Cras sodales nibh sed egestas adipiscing. Vestibulum sit amet eros sapien. Vestibulum quis dapibus sem. Fusce a lacinia nisl. Mauris sagittis egestas justo. Praesent tempus quis nibh nec imperdiet.
                    </p>
                    <div className="row pt-20">
                      <div className="col-md-12">
                        <h4>General Information</h4>
                        <ul className="du-choose-list">
                          <li><a href="#">Year of established : 1988</a></li>
                          <li><a href="#">No. of faculty : 10 </a></li>
                          <li><a href="#">Male Student : 2000 </a></li>
                          <li><a href="#">Female Student : 1500</a></li>
                          <li><a href="#">Total Teacher : 100</a></li>
                          <li><a href="#">Male Hostel Seat : 2500 </a></li>
                          <li><a href="#">Female Hostel Seat : 2000 </a></li>
                        </ul>									
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 wow fadeInRight">
                    <div className="du-google-map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3304.8335505155337!2d-84.302295!3d34.073780899999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575af70986d89%3A0x765a219a57ed595c!2s2020+Willshire+Glen%2C+Alpharetta%2C+GA+30009%2C+USA!5e0!3m2!1sen!2sbd!4v1427483431399" width={600} height={450} frameBorder={0} style={{border: 0}} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
        )
    }
}

export default About