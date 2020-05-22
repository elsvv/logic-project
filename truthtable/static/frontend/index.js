const tableContainer = document.getElementById("table-container");
const form = document.querySelector("form");
const formula = document.getElementById("formula");

const handleSubmit = (e) => {
  e.preventDefault();
  const { value } = formula;

  handleRequest(value);
};

const handleTable = (table) => {
  tableContainer.innerHTML = table;
};

const handleRequest = (value) => {
  const body = JSON.stringify({ formula: value });
  console.log(body);
  fetch("/api/formula/", {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then(({ table }) => handleTable(table));
};

form.addEventListener("submit", handleSubmit);
