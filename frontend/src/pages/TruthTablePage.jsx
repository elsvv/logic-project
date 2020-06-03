import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import TableInput from "../components/TableInput";
import TruthTable from "../components/TruthTable";
import { post } from "axios";

const TruthTablePage = () => {
  const [newTabel, setNewTable] = useState("");
  const [formula, setFormula] = useState("");
  const [loading, setLoading] = useState(false);
  const [formHistory, setFormHistory] = useState([]);

  const handleRequest = (formula) => {
    setLoading(true);
    post("/api/formula/", { formula })
      .then((res) => {
        if (res.status === 500) return Promise.reject(res);
        return res;
      })
      .then(({ data }) => {
        const { table } = data;
        if (!table.includes("F") || !table.includes("T")) {
          return setNewTable(false);
        }
        setNewTable(table);

        if (!formHistory.includes(formula))
          setFormHistory([formula, ...formHistory]);
      })
      .catch(() => {
        setNewTable(false);
      })
      .finally(() => setLoading(false));
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
            loading={loading}
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
