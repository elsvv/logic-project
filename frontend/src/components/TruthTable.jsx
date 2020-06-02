import React, { useEffect, useRef } from "react";

export default ({ table }) => {
  const tableEl = useRef(null);

  useEffect(() => {
    if (table) {
      renderTable(table);
    }
  }, [table]);

  const renderTable = (table) => {
    tableEl.current.innerHTML = table;
  };

  return <div ref={tableEl} className="table-wrap"></div>;
};

// {!table && <h4>Formula is not well-formed</h4>}
