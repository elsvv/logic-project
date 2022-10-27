import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Menu } from "antd";

import logo from "../assets/llfp-logo.png";
import { withRouter } from "../utils/withRouter";

const navLinks = [
  { to: "/truth-table", label: "Truth Tables" },
  { to: "/phil-map", label: "Philosophy map" },
  { to: "/ourmodels", label: "Our Models"},
  { to: "/othermodels", label: "Other Models" },
  { to: "/about", label: "About" },
];

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar__container">
      <div className="logo-wrap">
        <a href="https://llfp.hse.ru/" target="blank">
          <img alt="lab logo" className="logo" src={logo} />
        </a>
      </div>
      <Menu
        selectedKeys={window.location.pathname}
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={window.location.pathname}
      >
        {navLinks.map((link) => (
          <Menu.Item key={link.to}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : undefined)}
              to={link.to}
            >
              {link.label}
            </NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default withRouter(Navbar);
