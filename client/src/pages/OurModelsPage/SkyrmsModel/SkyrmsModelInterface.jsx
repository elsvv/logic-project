import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import "./page.css";

const SkyrmsModelInterface = () => {
  return (
    <div>
      <Helmet>
        <script src='./sine.js' />
      </Helmet>
      <table>
        <thead>
          <tr>
            <th>Выигрыш 1-го</th>
            <th>Выигрыш 2-го</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              {" "}
              0,0{" "}
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="x1"
                defaultValue={1}
              />
              <br />
              0,1{" "}
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="x2"
                defaultValue="0.6"
              />
              <br />
              1,0
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="x3"
                defaultValue="0.4"
              />
              <br />
              1,1
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="x4"
                defaultValue={0}
              />{" "}
              <br />
            </th>
            <th>
              {" "}
              0,0{" "}
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="y1"
                defaultValue={1}
              />
              <br />
              0,1{" "}
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="y2"
                defaultValue="0.6"
              />
              <br />
              1,0
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="y3"
                defaultValue="0.4"
              />
              <br />
              1,1
              <input
                type="range"
                min={0}
                max={1}
                step="0.001"
                id="y4"
                defaultValue={0}
              />{" "}
              <br />
            </th>
          </tr>
        </tbody>
      </table>
      <br />
      Шаг <input type="text" id="w" defaultValue="0.2" /> <br />
      <input type="button" id="b" defaultValue="Запустить" />
      <br />
      <br />
      <div id="vis" />
    </div>
  )
}

export default SkyrmsModelInterface