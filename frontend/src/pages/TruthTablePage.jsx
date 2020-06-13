import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Button, Tooltip } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useHistory } from "react-router-dom";

import TableInput from "../components/TableInput";
import TruthTable from "../components/TruthTable";
import { post } from "axios";
import message from "../utils/message";
import encodeToURI from "../utils/encodeToURI";
import generateTable from "../utils/generateTable";
import isTableValid from "../utils/isTableValid";

const TruthTablePage = ({
  match: {
    params: { preform },
  },
}) => {
  const [formula, setFormula] = useState("");
  const [loading, setLoading] = useState(false);
  const [col, setCol] = useState(null);
  const [data, setData] = useState(null);
  const [formHistory, setFormHistory] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (preform) {
      const decoded = decodeURIComponent(preform);
      handleClickFormula(decoded);
      history.push("/truth-table");
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

        if (!isTableValid(table)) {
          return setData(false);
        }

        const { columns, dataSource } = generateTable(table);
        setCol(columns);
        setData(dataSource);

        if (!formHistory.includes(formula))
          setFormHistory([formula, ...formHistory]);
      })
      .catch(() => {
        setData(false);
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
          text={window.location.origin + "/truth-table/" + encodeToURI(formula)}
        >
          <Tooltip title="Share link to your table">
            <Button
              shape="circle"
              onClick={() => message("Link to the table copied!")}
              // className="with-icon-center"
              disabled={!data}
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
          <TruthTable dataSource={data} columns={col} />
        </Col>
      </Row>
    </div>
  );
};

export default TruthTablePage;
