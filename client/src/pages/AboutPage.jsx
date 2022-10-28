import React from "react";
import { Typography, Divider } from "antd";

const { Text } = Typography;

const AboutPage = () => {
  return (
    <div className="about-page__container">
      <h1>About</h1>
      <span class="v118_208">Интерактивные модели для расчёта и визуализации динамики Скёрмса, динамики деГроота, динамической
      эпистемической логики и других увлекательных вещей. А также список моделей и инструментов для учёбы и
      исследований. 
      </span>
    
      <span class="v128_2">Проект создан лабораторией логики, лингвистики и формальной философии
      <Divider />
      <h3>Команда проекта:</h3>
      <ul>
        <li>Виталий Долгоруков</li>
        <li>Денис Федянин</li>
        <li>Елена Попова</li>
        <li>Даниил Хайтович</li>
        <li>Валерий Шевченко</li>
      </ul>
    </span>
    </div>
  );
};

export default AboutPage;
