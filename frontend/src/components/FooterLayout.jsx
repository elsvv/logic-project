import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

export default () => (
  <Footer>
    <div>
      <span style={{ textAlign: "center", display: "block" }}>Moscow 2020</span>
    </div>
  </Footer>
);
