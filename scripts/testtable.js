let table = document.getElementById('userTable');
window.addEventListener("load", fetchDataMakeTable)

function fetchDataMakeTable() {
    fetch('http://localhost:8083/api/todos')
.then(console.log('to do list'))
.then(response => response.json())
.then(data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(-1);
        let userIdCol = row.insertCell(0);
        console.log(data[i].userid);
         userIdCol.innerHTML = data[i].userid;

         let desCol = row.insertCell(1);
        console.log(data[i].description);
        desCol.innerHTML = data[i].description;

        let deadLineCol = row.insertCell(2);
        console.log(data[i].deadline);
        deadLineCol.innerHTML = data[i].deadline;

        let categoryCol = row.insertCell(3);
        console.log(data[i].category);
        categoryCol.innerHTML = data[i].category;

        let priorityCol = row.insertCell(4);
        console.log(data[i].priority);
        priorityCol.innerHTML = data[i].priority;

        let completedCol = row.insertCell(5);
        console.log(data[i].completed);
        completedCol.innerHTML = data[i].completed;



        /* <table id="userTable">
    <thead>
        <tr>
            <th>User ID</th>
            <th>Description</th>
            <th>DeadLine</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Completed</th>
        </tr>
    </thead>
    <tbody>
      
    </tbody> */
    
        
    }
})
}