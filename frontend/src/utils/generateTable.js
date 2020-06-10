import React from "react";

const isTrue = (value) => {
  return value === "T" || value == 1 || value === "⊤";
};

const generateColumns = (data) => {
  let columns = [
    {
      title: "",
      dataIndex: "index",
      key: "index",
    },
    ...data.map((cell) => ({
      title: cell,
      dataIndex: cell,
      key: cell,
      sorter: (a, b) => a[`${cell}`] - b[`${cell}`],
      sortDirections: ["descend", "ascend"],
    })),
  ];
  columns[columns.length - 1]["render"] = (value) => (
    <span className={isTrue(value) ? "true" : "false"}>{value}</span>
  );
  return columns;
};

const generateDataSource = (data, columns) => {
  const dataSource = [];
  for (let i = 1; i < data.length; i++) {
    const rowData = data[i];

    const row = {};
    for (let j = 1; j < columns.length; j++) {
      const title = columns[j]["title"];
      row[title] = rowData[j - 1];
    }
    row["index"] = i - 1;
    dataSource.push(row);
  }
  return dataSource;
};

export default (data) => {
  const columns = generateColumns(data[0]);
  const dataSource = generateDataSource(data, columns);

  return { columns, dataSource };
};

// const dataSource = [
//   {
//     key: "1",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street",
//   },
//   {
//     key: "2",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street",
//   },
// ];

// const col = [
//   {
//     title: "1",
//     name: "Mike",
//     age: 32,
//     address: "10 Downing Street",
//   },
//   {
//     title: "2",
//     name: "John",
//     age: 42,
//     address: "10 Downing Street",
//   },
// ];
