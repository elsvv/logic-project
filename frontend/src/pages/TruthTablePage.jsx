import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import TableInput from "../components/TableInput";
import TruthTable from "../components/TruthTable";
import { post } from "axios";

const TruthTablePage = () => {
  const [newTabel, setNewTable] = useState("");
  const [formula, setFormula] = useState("");
  const [formHistory, setFormHistory] = useState([]);

  const handleRequest = (formula) => {
    post("/api/formula/", { formula })
      .then(({ data }) => {
        const { table } = data;
        if (!table.includes("F") || !table.includes("T")) {
          return setNewTable(false);
        }
        setNewTable(table);

        if (!formHistory.includes(formula))
          setFormHistory([formula, ...formHistory]);
      })
      .catch((er) => setNewTable(false));
  };

  return (
    <div className="truth-table-page">
      <h1>Truth tables</h1>
      <Divider />
      <Row>
        <Col span={9}>
          <TableInput
            formula={formula}
            setFormula={setFormula}
            formHistory={formHistory}
            handleRequest={handleRequest}
          />
        </Col>
        <Col span={15}>
          <TruthTable table={newTabel} />
        </Col>
      </Row>
    </div>
  );
};

export default TruthTablePage;
