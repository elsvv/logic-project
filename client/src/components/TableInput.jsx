import React, { useRef } from "react";
import { Button, Input, Card, Divider, Radio } from "antd";

import TableInputConrols from "./TableInputConrols";
import TableHistory from "./TableHistory";
import { preformulas, VALUE_FORMAT } from "../config";

const { Search } = Input;

const TableInput = ({
  handleRequest,
  formHistory,
  formula,
  setFormula,
  loading,
  valueFormat,
  handleChangeValueFormat,
  handleClickFormula,
}) => {
  const inputEl = useRef(null);

  const handleSubmit = (value, e) => {
    e.preventDefault();

    handleRequest(formula);
  };

  const handleClickControl = (operator) => {
    const { selectionStart } = inputEl.current.input;

    const newFormula =
      formula.slice(0, selectionStart) +
      operator +
      formula.slice(selectionStart);

    setFormula(newFormula);
    inputEl.current.focus();
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
        <Radio.Group onChange={handleChangeValueFormat} value={valueFormat}>
          {VALUE_FORMAT.map((value) => (
            <Radio value={value} key={value}>
              {value}
            </Radio>
          ))}
        </Radio.Group>
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

export default TableInput;
