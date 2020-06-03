import React, { useEffect, useRef } from "react";

export default ({ table }) => {
  const tableEl = useRef(null);

  useEffect(() => {
    if (table) {
      renderTable(table);
    } else if (table === false) {
      renderTable(
        "<h4 class='table-error'>Provided formula is not well-formed</h4>"
      );
    }
  }, [table]);

  const renderTable = (table) => {
    tableEl.current.innerHTML = table;
  };

  return <div ref={tableEl} className="table-wrap"></div>;
};

// {!table && <h4>Formula is not well-formed</h4>}
