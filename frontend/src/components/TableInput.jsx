import React, { useRef } from "react";
import { Button, Input, Card, Divider } from "antd";

import TableInputConrols from "./TableInputConrols";
import TableHistory from "./TableHistory";

const { Search } = Input;

const preformulas = ["(p&(qvr))>~(s|t)", "p>q>p"];

export default ({
  handleRequest,
  formHistory,
  formula,
  setFormula,
  loading,
  handleClickFormula,
}) => {
  const inputEl = useRef(null);

  const handleSubmit = (value, e) => {
    e.preventDefault();

    handleRequest(formula);
  };

  function typeInTextarea(newText, el = document.activeElement) {
    const [start, end] = [el.selectionStart, el.selectionEnd];
    el.setRangeText(newText, start, end, "select");
  }

  const handleClickControl = (operator) => {
    setFormula(formula + operator);
    inputEl.current.focus();

    // typeInTextarea(operator);
  };

  return (
    <Card className="generator__container">
      <TableInputConrols handleClick={handleClickControl} />
      <form onSubmit={handleSubmit}>
        <Search
          placeholder="type your formula"
          enterButton="Eval"
          size="large"
          value={formula}
          ref={inputEl}
          onSearch={handleSubmit}
          loading={loading}
          onChange={(e) => setFormula(e.target.value)}
        />
      </form>
      <div className="preformulas_wrap table-card">
        <Divider orientation="left">Use examples:</Divider>
        {preformulas.map((f) => (
          <Button key={f} onClick={() => handleClickFormula(f)} type="dashed">
            {f}
          </Button>
        ))}
      </div>
      {formHistory.length > 0 && (
        <TableHistory
          formHistory={formHistory}
          handleClickFormula={handleClickFormula}
        />
      )}
    </Card>
  );
};
