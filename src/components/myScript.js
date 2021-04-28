var var1="";


function abc(){

var table = document.getElementById("panelTable");

// get number of rows
var numberOfRows = document.getElementById("panelTable").rows.length;


// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(numberofRows-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);

// Add some text to the new cells:
cell1.innerHTML = "<input type='text'    style='width:200px;'>";
cell2.innerHTML = "<input type='text'    style='width:300px;'>"; 
cell3.innerHTML="<input type='text'    style='width:500px;'>";


}
