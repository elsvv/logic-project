import React from "react";
import { Table } from "antd";

const TruthTable = ({ dataSource, columns }) => {
  return (
    <div className="table-wrap">
      {dataSource ? (
        <Table
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={false}
        />
      ) : dataSource === false ? (
        <h3 class="table-error">Provided formula is not well-formed</h3>
      ) : null}
    </div>
  );
};

export default TruthTable;
