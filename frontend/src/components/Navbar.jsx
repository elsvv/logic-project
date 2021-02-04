import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import logo from '../../static/images/llfp-logo.png';

const navLinks = [
  { to: '/truth-table', label: 'Truth Tables' },
  // { to: "/modal-resolver", label: "Modal Logic Resolver" },
  // { to: "/about", label: "About" },
];

const { Header } = Layout;

const Navbar = ({}) => {
  return (
    <Header className='navbar__container'>
      <div className='logo-wrap'>
        <a href='https://llfp.hse.ru/' target='blank'>
          <img className='logo' src={logo} />
        </a>
      </div>
      <Menu
        selectedKeys={location.pathname}
        theme='light'
        mode='horizontal'
        defaultSelectedKeys={location.pathname}
      >
        {navLinks.map((link) => (
          <Menu.Item key={link.to}>
            <NavLink to={link.to}>{link.label}</NavLink>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
};

export default withRouter(Navbar);
