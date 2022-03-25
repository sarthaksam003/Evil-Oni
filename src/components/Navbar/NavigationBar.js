import React, { useState } from "react";
import logo from "./imgs/samurai1.png";
import HeaderCartButton from "./Button/HeaderCartButton.js";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons/lib";
import "./NavigationBar.css";
import Backdrop from "../Backdrop/Backdrop";

const NavigationBar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
    setShowBackdrop(!showBackdrop);
  };

  return (
    <React.Fragment>
      <div className="navbar-layout">
        <IconContext.Provider value={{ color: "#fff" }} style={{ zIndex: "2" }}>
          <div className="navbar" style={{ zIndex: "2" }}>
            <span
              className="menu-bars"
              style={{ cursor: "pointer" }}
              onClick={toggleSidebar}
            >
              <FaIcons.FaBars onClick={toggleSidebar} />
              <Backdrop show={showBackdrop} />
            </span>
            <div className="header-logo">
              <Link to="/">
                <img src={logo} style={{ width: "15rem" }} alt="logo" />
              </Link>
            </div>
            <HeaderCartButton onClick={props.onShowCart} />
          </div>
          <nav
            className={sidebar ? "nav-menu zeeind active" : " zeeind nav-menu"}
          >
            <ul className="nav-menu-items" onClick={toggleSidebar}>
              <li className="navbar-toggle">
                <span style={{ cursor: "pointer" }} className="menu-bars">
                  <BsIcons.BsBoxArrowInLeft />
                </span>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.clsname}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </React.Fragment>
  );
};

export default NavigationBar;
