import React, { Component } from "react";
import {  Link, NavLink } from 'react-router-dom'
import logo from "../../img/logo.png";
var flag = false;
export class Header extends Component {
  click = function () {
    flag = !flag;
    var element = document.querySelectorAll(".flexy-menu li")
    if (flag === true) {
      for (var i = 0; i < element.length; i++)
        element[i].classList.remove("disnone")
    } else {
      for (i = 1; i < element.length; i++)
        element[i].classList.add("disnone")
    }
  }
  render() {
    return (
      <header className="clearfix">
        <div className="box">
          <div className="container">
            <div className="header-element clearfix">
              <div className="row">
                <div className="col-md-4">
                  <h1 className="navbar-brand navbar-brand_">
                    <a href="index.html">
                      <img className="img-responsive" src={logo} alt="logo" />
                    </a>
                  </h1>
                </div>
                <div className="col-md-8">
                  <ul className="flexy-menu orange">
                    <li className="showhide">
                      <span onClick={()=>{this.click()}} className="title">
                        MENU
                      </span>
                      <span onClick={()=>{this.click()}} className="icon">
                        <em />
                        <em />
                        <em />
                        <em />
                      </span>
                    </li>
                    <li className="disnone">
                      <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/">
                        <i className="icon-heart" />
                        Home
                      </NavLink>
                    </li>
                    <li className="disnone">
                      <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/about">
                        <i className="icon-cogs" />
                        About
                      </NavLink>
                    </li>
                    <li className="disnone">
                      <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/event">
                        <i className="icon-th" />
                        Events
                      </NavLink>
                    </li>
                    <li className="disnone">
                      <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/faculty">
                        <i className="icon-th" />
                        Faculty
                      </NavLink>
                    </li>
                    <li className="disnone">
                      <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/admissions">
                        <i className="icon-th" />
                        Admissions
                      </NavLink>
                    </li>
                    <li className="drolist disnone">
                      <Link to="#">
                        <i className="icon-th" />
                        Blog
                      </Link>
                      <span className="indicator">+</span>
                      <ul>
                        <li>
                          <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/blog">
                            Blog
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/blogsingle">
                            Blog Single
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="disnone">
                      <NavLink className={(navData) => (navData.isActive ? "active" : 'none')} to="/contact">
                        <i className="icon-envelope" />
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
