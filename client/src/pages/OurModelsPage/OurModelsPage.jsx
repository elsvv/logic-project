import React from "react";
import { modelsData } from "./modelsData";
import OurModelListItem from "../../components/OurModelListItem";
import "./ourModelsPage.css";

const OurModelsPage = () => {
  return (
    <div className="ourModels__container">
      <h1>Наши модели</h1>
      <ol>
        {modelsData.map((data) => (
          <OurModelListItem
            title={data.title}
            modelInterface={data.modelInterface}
            text={data.text}
            key={data.link}
          />
        ))}
      </ol>
    </div>
  );
};

export default OurModelsPage;
