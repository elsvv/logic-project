import React from "react";
import { modelsData } from "./constants/modelsData";
import OtherModelListItem from "../../components/OtherModelListItem";
import "./OtherModelsPage.css";

const OtherModelsPage = () => {
  return (
    <div className="other-page__container">
      <h1>Другие модели</h1>
      <ol>
        {modelsData.map((data) => (
          <OtherModelListItem
            text={data.text}
            link={data.link}
            img={data.img}
            title={data.title}
            key={data.link}
          />
        ))}
      </ol>
    </div>
  );
};

export default OtherModelsPage;
