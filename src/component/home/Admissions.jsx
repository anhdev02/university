import React, { Component } from "react";
import Blog1 from '../../img/blog1.jpg'
import Blog2 from '../../img/blog2.jpg'
import Blog3 from '../../img/blog3.jpg'
import Inter from '../../img/international-graduate.jpg'
import Part from '../../img/part-time-student.jpg'
import Tran from '../../img/transfer-admission.jpg'

export class Admission extends Component {
  render() {
    return (
      <div className="dream-university-subpage">
        {/* Begin breadcrumbs*/}
        <div className="du-page-header du-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-12 text-left du-title">
                <div className="du-breadcrumb-title">
                  <h3>Admissions</h3>
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-12 text-right du-breadcrumb">
                <div className="breadcrumbs">Admissions page</div>
              </div>
            </div>
          </div>
        </div>
        {/* End breadcrumbs*/}
        {/* Begin Event */}
        <div className="du-subpage-content">
          <div className="du-admission">
            {/* Begin choose us */}
            <section className="admission ptb-50">
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 text-left">
                    <h2>Admissions</h2>
                    <p>
                      Morbi condimentum, nunc non ornare dignissim, tellus eros
                      molestie turpis, eu vehicula metus quam ac tellus aenean
                      cursus massa in nulla suscipit lacinia in at eros.
                    </p>
                  </div>
                </div>
                <section className="du-admission-content">
                  <div className="row">
                    <div className="col-md-4 ">
                      <div className="thumbnail">
                        <img src={Blog1} alt="" />
                        <div className="caption">
                          <h4>Undergraduate Admission</h4>
                          <p>
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec id elit non mi porta gravida at
                            eget metus. Nullam id dolor id nibh ultricies
                            vehicula ut id elit.Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Cras
                            justo odio, dapibus ac facilisis in.Cras justo odio,
                            dapibus ac facilisis in
                          </p>
                          <div className="admission-feature">
                            <ul className="du-choose-list">
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Inquire
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Apply
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Visit
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="thumbnail">
                        <img src={Blog2} alt="" />
                        <div className="caption">
                          <h4>Graduate Admission</h4>
                          <p>
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec id elit non mi porta gravida at
                            eget metus. Nullam id dolor id nibh ultricies
                            vehicula ut id elit.Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Cras
                            justo odio, dapibus ac facilisis in.Cras justo odio,
                            dapibus ac facilisis in
                          </p>
                          <div className="admission-feature">
                            <ul className="du-choose-list">
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Inquire
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Apply
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Visit
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="thumbnail">
                        <img src={Inter} alt="" />
                        <div className="caption">
                          <h4>International Admission</h4>
                          <p>
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec id elit non mi porta gravida at
                            eget metus. Nullam id dolor id nibh ultricies
                            vehicula ut id elit.Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Cras
                            justo odio, dapibus ac facilisis in.Cras justo odio,
                            dapibus ac facilisis in
                          </p>
                          <div className="admission-feature">
                            <ul className="du-choose-list">
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Inquire
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Apply
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Visit
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="thumbnail">
                        <img src={Part} alt="" />
                        <div className="caption">
                          <h4>Center for Adult and Part-time Students</h4>
                          <p>
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec id elit non mi porta gravida at
                            eget metus. Nullam id dolor id nibh ultricies
                            vehicula ut id elit.Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Cras
                            justo odio, dapibus ac facilisis in.Cras justo odio,
                            dapibus ac facilisis in
                          </p>
                          <div className="admission-feature">
                            <ul className="du-choose-list">
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Inquire
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Apply
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Visit
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="thumbnail">
                        <img src={Tran} alt="" />
                        <div className="caption">
                          <h4>Transfer Admission</h4>
                          <p>
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec id elit non mi porta gravida at
                            eget metus. Nullam id dolor id nibh ultricies
                            vehicula ut id elit.Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Cras
                            justo odio, dapibus ac facilisis in.Cras justo odio,
                            dapibus ac facilisis in
                          </p>
                          <div className="admission-feature">
                            <ul className="du-choose-list">
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Inquire
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Apply
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Visit
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="thumbnail">
                        <img src={Blog3} alt="" />
                        <div className="caption">
                          <h4>Summer Programs</h4>
                          <p>
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Donec id elit non mi porta gravida at
                            eget metus. Nullam id dolor id nibh ultricies
                            vehicula ut id elit.Cras justo odio, dapibus ac
                            facilisis in, egestas eget quam. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Cras
                            justo odio, dapibus ac facilisis in.Cras justo odio,
                            dapibus ac facilisis in
                          </p>
                          <div className="admission-feature">
                            <ul className="du-choose-list">
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Inquire
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Apply
                                </button>
                              </li>
                              <li>
                                <button
                                  type="submit"
                                  className="btn-default du-common-property"
                                >
                                  Visit
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Thumbnails container */}
                  </div>
                </section>
              </div>
            </section>
            {/* End event */}
          </div>
          {/* /.du-event */}
        </div>
      </div>
    );
  }
}

export default Admission;
