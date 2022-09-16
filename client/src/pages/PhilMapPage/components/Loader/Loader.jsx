import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import "./Loader.scss";

import Polygons from "./Polygons";

const Loader = () => {
  let [container, setContainer] = useState(["loader-container"]);
  let [degree, setDegree] = useState(10);
  let [rotDeg, setRotDeg] = useState(1);
  let [polygon, setPolygon] = useState(null);

  const handleLoad = useCallback(() => {
    let period = 130;
    let polCount = 0;
    for (let i = 0; i < Polygons.length; i++) {
      setTimeout(() => {
        setPolygon(Polygons[i]);
      }, i * period);
      polCount++;
    }
    setContainer(["loader-container end"]);
    let maxDegree = 95;
    let diff = maxDegree - degree;
    for (let j = 0; j <= diff; j++) {
      setTimeout(() => {
        setDegree(degree++);
        setRotDeg(rotDeg * (j + 1) * degree);
      }, j * ((polCount * period) / diff));
    }
    setRotDeg(1);
  }, []);

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div
      className={container}
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, #007296 ${degree}%, rgba(255, 255, 255, 0) 100%)`,
        transform: `translate(-50%, -50%) rotate(${rotDeg / 10}deg)`,
      }}
      onClick={handleLoad}
    >
      <div
        className="polygons"
        // style={{ width: 100, height: 100, border: "1px solid blue" }}
      >
        {polygon}
      </div>
    </div>
  );
};
export default Loader;
