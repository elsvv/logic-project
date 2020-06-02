import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

import "./App.css";

import TruthTablePage from "./pages/TruthTablePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import FooterLayout from "./components/FooterLayout";

const App = () => {
  return (
    <Router>
      <Layout className="site-layout">
        <Navbar />
        <Content className="content-layout">
          <Switch>
            <Route path="/truth-table" component={TruthTablePage} />
            <Route path="/about" component={AboutPage} />
            <Redirect to="/about" />
          </Switch>
        </Content>
        <FooterLayout />
      </Layout>
    </Router>
  );
};

export default App;
