import React from 'react';

const isTrue = (value) => {
  return value === 'T' || value == 1 || value === '⊤';
};

const generateColumns = (data, formulasNum) => {
  let columns = [
    {
      title: '',
      dataIndex: 'index',
      key: 'index',
    },
    ...data.map((cell) => ({
      title: cell,
      dataIndex: cell,
      key: cell,
      sorter: (a, b) => a[`${cell}`] - b[`${cell}`],
      sortDirections: ['descend', 'ascend'],
    })),
  ];

  for (let i = 1; i < formulasNum + 1; i++) {
    columns[columns.length - i]['render'] = (value) => (
      <span className={isTrue(value) ? 'true' : 'false'}>{value}</span>
    );
  }
  return columns;
};

const generateDataSource = (data, columns) => {
  const dataSource = [];
  for (let i = 1; i < data.length; i++) {
    const rowData = data[i];

    const row = {};
    for (let j = 1; j < columns.length; j++) {
      const title = columns[j]['title'];
      row[title] = rowData[j - 1];
    }
    row['index'] = i - 1;
    dataSource.push(row);
  }
  return dataSource;
};

export default (data, formulasNum) => {
  const columns = generateColumns(data[0], formulasNum);
  const dataSource = generateDataSource(data, columns);

  return { columns, dataSource };
};
