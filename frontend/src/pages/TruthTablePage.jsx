import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Button, Tooltip } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

import TableInput from "../components/TableInput";
import TruthTable from "../components/TruthTable";
import { post } from "axios";
import message from "../utils/message";

const TruthTablePage = ({
  match: {
    params: { preform },
  },
}) => {
  const [newTabel, setNewTable] = useState("");
  const [formula, setFormula] = useState("");
  const [loading, setLoading] = useState(false);
  const [formHistory, setFormHistory] = useState([]);

  useEffect(() => {
    if (preform) {
      handleClickFormula(preform);
    }
  }, []);

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

  const handleClickFormula = (selected) => {
    setFormula(selected);
    handleRequest(selected);
  };

  return (
    <div className="truth-table-page">
      <div className="page__header">
        <h1 className="page__title">Truth tables</h1>
        <CopyToClipboard
          text={encodeURI(window.location.origin + "/truth-table/" + formula)}
        >
          <Tooltip title="Share link to your table">
            <Button
              shape="circle"
              onClick={() => message("Link to the table copied!")}
              className="with-icon-center"
            >
              <ShareAltOutlined />
            </Button>
          </Tooltip>
        </CopyToClipboard>
      </div>
      <Divider />
      <Row>
        <Col span={9}>
          <TableInput
            formula={formula}
            setFormula={setFormula}
            formHistory={formHistory}
            handleRequest={handleRequest}
            loading={loading}
            handleClickFormula={handleClickFormula}
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
