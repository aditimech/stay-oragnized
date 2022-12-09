
/* -----------Populate Dropdown ----------------*/

let newUsernameEl = document.getElementById("userid");
let categoryEl = document.getElementById("category");
let usernameEl = document.getElementById("todoDropdown");




fetch("http://localhost:8083/api/users")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let opt = document.createElement("option");
      let text = (opt.textContent = data[i].name);
      let value = (opt.value = data[i].id);
      console.log(value);
      newUsernameEl.appendChild(opt);
    }
  });


fetch("http://localhost:8083/api/categories")
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      let opt = document.createElement("option");
      let text = (opt.textContent = data[i].name);
      opt.value = data[i].name;
      categoryEl.appendChild(opt);
    }
  });

 /*  --------------add data to server ---------------------*/

 const btn = document.getElementById("inputBtn");
const formEl = document.getElementById("inputData");

formEl.addEventListener("submit", getData);


let formJSON;

function getData(evt) {
  console.log(`button works ${btn}`);
  evt.preventDefault();
  const data = new FormData(evt.target);
  console.log(data.entries);
  formJSON = Object.fromEntries(data.entries());
  console.log(formJSON);
  sendData();
}

function sendData() {
  fetch("http://localhost:8083/api/todos/", {
    method: "POST",
    body: JSON.stringify(formJSON),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => {
      let confirmationMessage = document.getElementById("confirmationMessage");
      confirmationMessage.innerHTML = "New Todo Added";
    })
    .catch((err) => {
      console.log(err);
      let confirmationMessage = document.getElementById("confirmationMessage");
      confirmationMessage.innerHTML = "Todo has NOT been added, try again";
    });
}



