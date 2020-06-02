import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

import logo from "../../static/images/llfp-logo.png";

const navLinks = [
  { to: "/truth-table", label: "Truth Tables" },
  { to: "/about", label: "About" },
];

const findKey = (path) => {
  const res = navLinks.indexOf(navLinks.find((l) => l.to == path));
  console.log(res);
  return res + "";
};

const { Header, Content, Footer } = Layout;
const Navbar = ({}) => {
  return (
    <header className="navbar__container">
      <a href="https://llfp.hse.ru/" target="blank">
        <img className="logo" src={logo} />
      </a>
      <Menu
        selectedKeys={location.pathname}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={location.pathname}
      >
        {navLinks.map((link) => (
          <Menu.Item key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </Menu.Item>
        ))}
        {/* <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
      {/* <a href="https://llfp.hse.ru/" target="blank">
        <img className="logo" src={logo} />
      </a>
      <div className="links-wrap">
        <NavLink to="/truth-table">Truth Tables</NavLink>
        <NavLink to="/about">About</NavLink>
      </div> */}
    </header>
  );
};

export default withRouter(Navbar);
