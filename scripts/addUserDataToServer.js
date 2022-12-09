// const userNameDropDownVal = document.querySelector('#userName').value;
// const categoryDropDownVal = document.querySelector('#category').value;
// const priorityDropDownVal = document.querySelector('#priority').value;
// const deadlineDateVal = document.querySelector('#deadline').value;
// const descriptionTxtAreaVal = document.querySelector('#description').value;
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


