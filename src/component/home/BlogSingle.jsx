import React, { Component } from "react";
import Single from '../../img/blog/single-post.jpg'
import Small7 from '../../img/blog/small/7.jpg'
import Small10 from '../../img/blog/small/10.jpg'
import Small1 from '../../img/blog/small/1.jpg'
import Agent6 from '../../img/blog/agent-06.jpg'
import Agent1 from '../../img/blog/agent-01.jpg'
import Agent4 from '../../img/blog/agent-04.jpg'
export class BlogSingle extends Component {
  render() {
    return (
      <div className="dream-university-subpage">
        {/* Begin breadcrumbs*/}
        <div className="du-page-header du-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-7 col-xs-12 text-left du-title">
                <div className="du-breadcrumb-title">
                  <h3>Single page</h3>
                </div>
              </div>
              <div className="col-md-5 col-sm-5 col-xs-12 text-right du-breadcrumb">
                <div className="breadcrumbs">Blog single page</div>
              </div>
            </div>
          </div>
        </div>
        {/* End breadcrumbs*/}
        {/* Begin Blog single */}
        <div className="du-subpage-content">
          <div className="du-single-page">
            {/* Begin Single Post */}
            <section className="single-page ptb-50">
              <div className="container">
                <div className="row">
                  <div className="col-md-9">
                    <h2>Single Post</h2>
                    <div className="box-container post">
                      <img
                        alt="image"
                        className="media-object img-responsive"
                        src={Single}
                      />
                      <div className="ptb-30">
                        <div className="clearfix meta">
                          <p className="serif italic pull-left">
                            Date:
                            <a>15 May 2012</a>
                          </p>
                          <p className="serif italic pull-right">
                            <i className="icon-comment" />
                            <a>4 Comments</a>
                          </p>
                        </div>
                        <h2>
                          Heading 1. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue, eu vulputate magna eros eu
                          erat
                        </h2>
                        <div className="author">
                          <p className="serif italic">
                            posted by:
                            <a>John Doe</a>
                            in
                            <a>Category Name</a>
                          </p>
                        </div>
                        <p>
                          <strong>
                            Pellentesque habitant morbi tristique senectus et
                            netus et malesuada fames ac turpis egestas.
                            Vestibulum tortor quam, feugiat vitae, ultricies
                            eget, tempor sit amet, ante.
                          </strong>
                          Donec eu libero sit amet quam egestas semper. Aenean
                          ultricies mi vitae est. Mauris placerat eleifend leo.
                          Quisque sit amet est et sapien ullamcorper pharetra.
                          Vestibulum erat wisi, condimentum sed, commodo vitae,
                          ornare sit amet, wisi. Aenean fermentum, elit eget
                          tincidunt condimentum, eros ipsum rutrum orci,
                          sagittis tempus lacus enim ac dui. Donec non enim in
                          turpis pulvinar facilisis. Ut felis. Praesent dapibus,
                          neque id cursus faucibus, tortor neque egestas augue,
                          eu vulputate magna eros eu erat. Aliquam erat
                          volutpat. Nam dui mi, tincidunt quis, accumsan
                          porttitor, facilisis luctus, metus
                        </p>
                        <h2>
                          Heading 2. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue.
                        </h2>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo.
                        </p>
                        <blockquote>
                          <p>
                            Blockquote. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Integer posuere erat a ante.
                          </p>
                          <small>
                            Someone famous
                            <cite title="Source Title">Source Title</cite>
                          </small>
                        </blockquote>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo.
                        </p>
                        <h3>
                          Heading 3. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue.
                        </h3>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo.
                        </p>
                        <ul>
                          <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit.
                          </li>
                          <li>
                            Aliquam tincidunt mauris eu risus.
                            <ul>
                              <li>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit.
                              </li>
                              <li>Aliquam tincidunt mauris eu risus.</li>
                              <li>Vestibulum auctor dapibus neque.</li>
                            </ul>
                          </li>
                          <li>Vestibulum auctor dapibus neque.</li>
                        </ul>
                        <h4>
                          Heading 4. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue.
                        </h4>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo.
                        </p>
                        <ol>
                          <li>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit.
                          </li>
                          <li>Aliquam tincidunt mauris eu risus.</li>
                          <li>Vestibulum auctor dapibus neque.</li>
                        </ol>
                        <h5>
                          Heading 5. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue.
                        </h5>
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Vestibulum
                          tortor quam, feugiat vitae, ultricies eget, tempor sit
                          amet, ante. Donec eu libero sit amet quam egestas
                          semper. Aenean ultricies mi vitae est. Mauris placerat
                          eleifend leo.
                        </p>
                        <h6>
                          Heading 6. Praesent dapibus, neque id cursus faucibus,
                          tortor neque egestas augue.
                        </h6>
                        <p>
                          Quisque sit amet est et sapien ullamcorper pharetra.
                          Vestibulum erat wisi, condimentum sed, commodo vitae,
                          ornare sit amet, wisi. Aenean fermentum, elit eget
                          tincidunt condimentum, eros ipsum rutrum orci,
                          sagittis tempus lacus enim ac dui. Donec non enim in
                          turpis pulvinar facilisis. Ut felis. Praesent dapibus,
                          neque id cursus faucibus, tortor neque egestas augue,
                          eu vulputate magna eros eu erat.
                        </p>
                      </div>
                    </div>
                    {/* .post */}
                    <div className="comment-container">
                      <h3 className="serif italic">
                        4 Responses to "Praesent dapibus, neque id cursus
                        faucibus, tortor neque egestas augue, eu vulputate magna
                        eros eu erat"
                      </h3>
                      <div className="comments">
                        <ul className="media-list">
                          <li className="media">
                            <a className="pull-left" href="#">
                              <img
                                alt=""
                                className="media-object comment-avatar img-responsive"
                                src={Agent6}
                              />
                            </a>
                            <div className="media-body">
                              <div className="comment-holder">
                                <div className="media-head clearfix row-fluid">
                                  <div className="span10">
                                    <h4 className="media-heading">John Doe</h4>
                                  </div>
                                  {/*/span10*/}
                                  <div className="span2">
                                    <a
                                      className="serif italic pull-right"
                                      href="#"
                                      title
                                    >
                                      Reply
                                    </a>
                                  </div>
                                  {/*/span2*/}
                                </div>
                                {/*/ media-head*/}
                                <p className="serif italic comment-date">
                                  Date: 15 May 2012
                                </p>
                                <div className="comment-body">
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    incididunt ut labore et dolore magna aliqua
                                    adipisicing it seddo eiusmod tempor. Nam
                                    eget venenatis diam. Nunc dictum suscipit
                                    justo, ut gravida nunc cursus aliquet.
                                    Suspendisse vel felis eget augue consequat
                                    tincidunt nec a orci.
                                  </p>
                                </div>
                                {/*/comment-body*/}
                              </div>
                              {/*/comment-holder*/}
                              {/*NESTED COMMENT STARTS*/}
                              <div className="media">
                                <a className="pull-left" href="#">
                                  <img
                                    alt=""
                                    className="media-object comment-avatar img-responsive"
                                    src={Agent6}
                                  />
                                </a>
                                <div className="media-body">
                                  <div className="comment-holder">
                                    <div className="media-head clearfix row-fluid">
                                      <div className="col-md-10">
                                        <h4 className="media-heading">
                                          Erik Peterson
                                        </h4>
                                      </div>
                                      {/*/span10*/}
                                      <div className="col-md-2">
                                        <a
                                          className="serif italic pull-right"
                                          href="#"
                                          title
                                        >
                                          Reply
                                        </a>
                                      </div>
                                      {/*/span2*/}
                                    </div>
                                    {/*/ media-head*/}
                                    <p className="serif italic comment-date">
                                      Date: 15 May 2012
                                    </p>
                                    <div className="comment-body">
                                      <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        incididunt ut labore et dolore magna
                                        aliqua adipisicing it seddo eiusmod
                                        tempor. Nam eget venenatis diam. Nunc
                                        dictum suscipit justo, ut gravida nunc
                                        cursus aliquet. Suspendisse vel felis
                                        eget augue consequat tincidunt nec a
                                        orci.
                                      </p>
                                    </div>
                                    {/*/comment-body*/}
                                  </div>
                                  {/*/comment-holder*/}
                                </div>
                              </div>
                              {/*NESTED COMMENT ENDS*/}
                            </div>
                          </li>
                          <li className="media">
                            <a className="pull-left" href="#">
                              <img
                                alt=""
                                className="media-object comment-avatar img-responsive"
                                src={Agent1}
                              />
                            </a>
                            <div className="media-body">
                              <div className="comment-holder">
                                <div className="media-head clearfix row-fluid">
                                  <div className="col-md-10">
                                    <h4 className="media-heading">John Doe</h4>
                                  </div>
                                  {/*/span10*/}
                                  <div className="col-md-2">
                                    <a
                                      className="serif italic pull-right"
                                      href="#"
                                      title
                                    >
                                      Reply
                                    </a>
                                  </div>
                                  {/*/span2*/}
                                </div>
                                {/*/ media-head*/}
                                <p className="serif italic comment-date">
                                  Date: 15 May 2012
                                </p>
                                <div className="comment-body">
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    incididunt ut labore et dolore magna aliqua
                                    adipisicing it seddo eiusmod tempor. Nam
                                    eget venenatis diam. Nunc dictum suscipit
                                    justo, ut gravida nunc cursus aliquet.
                                    Suspendisse vel felis eget augue consequat
                                    tincidunt nec a orci.
                                  </p>
                                </div>
                                {/*/comment-body*/}
                              </div>
                              {/*/comment-holder*/}
                            </div>
                          </li>
                          <li className="media">
                            <a className="pull-left" href="#">
                              <img
                                alt=""
                                className="media-object comment-avatar img-responsive"
                                src={Agent4}
                              />
                            </a>
                            <div className="media-body">
                              <div className="comment-holder">
                                <div className="media-head clearfix row-fluid">
                                  <div className="col-md-10">
                                    <h4 className="media-heading">
                                      Brian Reston
                                    </h4>
                                  </div>
                                  {/*/span10*/}
                                  <div className="col-md-2">
                                    <a
                                      className="serif italic pull-right"
                                      href="#"
                                      title
                                    >
                                      Reply
                                    </a>
                                  </div>
                                  {/*/span2*/}
                                </div>
                                {/*/ media-head*/}
                                <p className="serif italic comment-date">
                                  Date: 15 May 2012
                                </p>
                                <div className="comment-body">
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    incididunt ut labore et dolore magna aliqua
                                    adipisicing it seddo eiusmod tempor. Nam
                                    eget venenatis diam. Nunc dictum suscipit
                                    justo, ut gravida nunc cursus aliquet.
                                    Suspendisse vel felis eget augue consequat
                                    tincidunt nec a orci.
                                  </p>
                                </div>
                                {/*/comment-body*/}
                              </div>
                              {/*/comment-holder*/}
                            </div>
                          </li>
                        </ul>
                      </div>
                      {/* .comments */}
                    </div>
                    {/* .comment-container */}
                    <div className="comment-form">
                      <h3 className="section-title">Leave a comment</h3>
                      <form role="form" action method="post">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="InputName"
                                  id="InputName"
                                  placeholder="Enter Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="InputEmail"
                                  name="InputEmail"
                                  placeholder="Enter Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="webSite"
                                  name="webSite"
                                  placeholder="Website"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="input-group">
                                <textarea
                                  name="InputMessage"
                                  id="InputMessage"
                                  className="form-control"
                                  rows={5}
                                  required
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <input
                              type="submit"
                              name="submit"
                              id="submit"
                              defaultValue="Submit"
                              className="btn-default du-common-property"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Blog sidebar */}
                  <div className="col-md-3">
                    <div className="sidebar">
                      <div className="sidebar-inner">
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
                        <div className="widget">
                          <h3 className="widget-title">Recent Post</h3>
                          <div className="post-list">
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small7}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">West Side</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small10}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">St Johns Pl</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small1}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">Culver Blvd</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small7}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">West Side</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small7}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">West Side</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                          </div>
                          {/* /.post-list */}
                        </div>
                        {/* /.widget */}
                        <div className="widget">
                          <h3 className="widget-title">Popular Post</h3>
                          <div className="post-list">
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small10}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">St Johns Pl</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small1}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">Culver Blvd</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small7}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">West Side</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small10}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">St Johns Pl</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                            <div className="sidebar-single-post clearfix">
                              <div className="sidebar-single-post-picture col-sm-12 col-md-4">
                                <div className="sidebar-single-post-picture-inner">
                                  <a
                                    href="#"
                                    className="sidebar-single-post-picture-target"
                                  >
                                    <img
                                      className="img-responsive"
                                      src={Small1}
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/* /.sidebar-single-post-picture */}
                              </div>
                              {/* /.sidebar-single-post-picture */}
                              <div className="sidebar-post-content-box col-sm-12 col-md-8">
                                <h4 className="sidebar-single-post-title">
                                  <a href="#">Culver Blvd</a>
                                </h4>
                                {/* /.sidebar-single-post-title */}
                                <div className="sidebar-post-content">
                                  {" "}
                                  <span className="sidebar-post-content-suffix">
                                    Pellentesque habitant{" "}
                                  </span>
                                </div>
                                {/* /.sidebar-post-content */}
                              </div>
                              {/* /.sidebar-post-content-box */}
                            </div>
                            {/* /.sidebar-single-post */}
                          </div>
                          {/* /.post-list */}
                        </div>
                        {/* /.widget popular property */}
                      </div>
                      {/* /.sidebar-inner */}
                    </div>
                    {/* /.sidebar */}
                  </div>
                </div>
              </div>
            </section>
            {/* End Single Post */}
          </div>
          {/* /.du-blog-single */}
        </div>
      </div>
    );
  }
}

export default BlogSingle