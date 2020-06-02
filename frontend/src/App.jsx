import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.css";

import TruthTablePage from "./pages/TruthTablePage";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="pages__container">
        <Route path="/truth-table" component={TruthTablePage} />
        <Route path="/about" component={AboutPage} />
        {/* <Redirect to="/about" /> */}
      </main>
    </Router>
  );
};

export default App;
