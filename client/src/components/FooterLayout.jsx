import React from "react";
import { Layout } from "antd";
import "./footer.css";

const { Footer } = Layout;

const year = new Date().getFullYear();

const FooterLayout = () => (
  <Footer className="main_footer-container">
    <div className="main_footer-funding">
      <p>Страница подготовлена по результатам проекта «Логико-философский калькулятор: интерактивные модели для вычислительной философии и вычислительной семантики» при поддержке фонда «Гуманитарные исследования» ФГН НИУ «Высшая школа экономики» в 2021-2022 году.</p>
    </div>
    <div className="main_footer-year">
      <span>
        Moscow {year}
      </span>
    </div>
  </Footer>
);

export default FooterLayout;
