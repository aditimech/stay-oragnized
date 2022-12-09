const viewAllBtn = document.querySelector("#viewAllBtn");
const searchBtn = document.querySelector('#searchBtn');
const userIdDropDown = document.querySelector('#todoDropdown');
const output = document.querySelector("#output");

let allTodosEndPont = "http://localhost:8083/api/todos";
let byUserEndpoint = "http://localhost:8083/api/todos/byuser/";

viewAllBtn.onclick = () => fetchData(allTodosEndPont);
searchBtn.onclick = () => {
    const id = userIdDropDown.value
    if(id == "default") console.error("Choose an ID from the drop box");
    else fetchData(`${byUserEndpoint}${id}`)
}
    //: fetchData(`${byUserEndpoint}${"user.id"}`);

function fetchData(endpoint) {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      createTable(data);
    });
}

function createTable(data) {
  let tableHeaders = [
    "User ID",
    "Description",
    "DeadLine",
    "Category",
    "Priority",
    "Completed",
  ];

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  table.appendChild(thead);
  let tr = document.createElement("tr");
  thead.appendChild(tr);
//clear table
output.innerHTML = "";
  //Pop table header
  for (let i = 0; i < tableHeaders.length; i++) {
    let th = document.createElement("th");
    th.textContent = tableHeaders[i];
    tr.appendChild(th);
  }

  //popTableData
  for (let i = 0; i < data.length; i++) {
    let row = table.insertRow(-1);
    
    let userIdCol = row.insertCell(0);
    userIdCol.innerHTML = data[i].userid;

    let desCol = row.insertCell(1);
    desCol.innerHTML = data[i].description;

    let deadLineCol = row.insertCell(2);
    deadLineCol.innerHTML = data[i].deadline;

    let categoryCol = row.insertCell(3);
    categoryCol.innerHTML = data[i].category;

    let priorityCol = row.insertCell(4);
    priorityCol.innerHTML = data[i].priority;

    let completedCol = row.insertCell(5);
    completedCol.innerHTML = data[i].completed;
  }
  output.appendChild(table);
}