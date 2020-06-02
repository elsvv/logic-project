import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text } = Typography;

const AboutPage = () => {
  return (
    <div className="about-page__container">
      <h1>About</h1>
      <p>
        The International Laboratory for Logic, Linguistics and Formal
        Philosophy (LLFP) was founded on April 16, 2018 based on the results of
        the project competition for creating international laboratories at the
        Higher School of Economics for the period from April 2018 to December
        2020.
      </p>
      <Divider />
      <p>
        Демонстрационная страница для <Text strong>конкурса</Text> на создание
        проектных групп.
      </p>
    </div>
  );
};

export default AboutPage;
