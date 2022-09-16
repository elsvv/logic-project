import React from "react";
import { Button, Divider } from "antd";

const TableHistory = ({ handleClickFormula, formHistory }) => (
  <div className="history_wrap table-card">
    <Divider orientation="left">Evaluation history:</Divider>
    {formHistory.map((f) => (
      <Button key={f} onClick={() => handleClickFormula(f)} type="dashed">
        {f}
      </Button>
    ))}
  </div>
);

export default TableHistory;
