import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import TruthTablePage from "./pages/TruthTablePage";
import PhilMapPage from "./pages/PhilMapPage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import OtherModelsPage from "./pages/OtherModelsPage/OtherModelsPage";
import OurModelsPage from "./pages/OurModelsPage/OurModelsPage";
import FooterLayout from "./components/FooterLayout";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Layout className="site-layout">
        <Navbar />
        <Layout.Content className="content-layout">
          <Routes>
            <Route path="/truth-table" element={<TruthTablePage />} />
            <Route path="/phil-map" exact element={<PhilMapPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ourmodels" element={<OurModelsPage />} />
            <Route path="/othermodels" element={<OtherModelsPage />} />
            <Route path="*" element={<TruthTablePage />} />
          </Routes>
        </Layout.Content>
        <FooterLayout />
      </Layout>
    </Router>
  );
};

export default App;
