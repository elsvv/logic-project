import React, { useState, useRef } from "react";
import { post } from "axios";
import { Button } from "antd";

const preformulas = ["(p&(qvr))>~(s|t)", "p>q>p"];

export default () => {
  const [formula, setFormula] = useState("");
  const tableEl = useRef(null);

  const handleRequest = (formula) => {
    post("/api/formula/", { formula })
      .then(({ data }) => {
        const { table } = data;
        if (!table.includes("F") || !table.includes("T"))
          return renderTable("Your formula is invalid");
        renderTable(table);
      })
      .catch((er) => renderTable("Your formula is invalid"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleRequest(formula);
  };

  const renderTable = (table) => {
    tableEl.current.innerHTML = table;
  };

  const handleClickFormula = (selected) => {
    setFormula(selected);
    handleRequest(selected);
  };

  return (
    <div className="generator__container">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFormula(e.target.value)}
          placeholder="type formula"
          type="text"
          value={formula}
        />
        <Button type="primary" onClick={handleSubmit}>
          Eval
        </Button>
      </form>
      <div className="preformulas_wrap">
        {preformulas.map((f) => (
          <Button onClick={() => handleClickFormula(f)} type="dashed">
            {f}
          </Button>
        ))}
      </div>
      <div ref={tableEl} className="table-wrap"></div>
    </div>
  );
};
