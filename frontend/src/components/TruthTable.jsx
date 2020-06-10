import React from "react";
import { Table } from "antd";

export default ({ dataSource, columns }) => {
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
        <h4 class="table-error">Provided formula is not well-formed</h4>
      ) : null}
    </div>
  );
};
