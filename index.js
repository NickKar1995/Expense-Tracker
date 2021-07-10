function addExpense() {
  //Grabbing the values of each//

  let expense_value = document.getElementById('expense').value;
  document.getElementById("expense").value = "";
  let date_expense = document.getElementById('date').value;
  document.getElementById("date").value = "";
  let amount = document.getElementById("amount").value;
  document.getElementById("amount").value = "";

  //Cheking for equality//

  if (expense_value !== "" && date_expense !== "" && amount !== "") {

    //Showing values on the table//

    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell1.innerHTML = `${expense_value}`;
    cell2.innerHTML = `${date_expense}`;
    cell3.innerHTML = `${amount}$`;
    let delbutton = document.createElement("button");
    delbutton.appendChild(document.createTextNode("Delete"));
    cell4.appendChild(delbutton);
    delbutton.addEventListener("click", function() {
      let i = this.parentNode.parentNode.rowIndex;
      document.getElementById("table").deleteRow(i);
    });
  } else {
    alert("You are missing one");
  }




}
