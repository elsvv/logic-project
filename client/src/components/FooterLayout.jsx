import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const year = new Date().getFullYear();

const FooterLayout = () => (
  <Footer>
    <div>
      <span style={{ textAlign: "center", display: "block" }}>
        Moscow {year}
      </span>
    </div>
  </Footer>
);

export default FooterLayout;
