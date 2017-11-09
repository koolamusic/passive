// initialize variables
var form = document.getElementById('addForm');
var items = document.getElementById('items');

// Form submit event listener
form.addEventListener ('submit', addItem);


// Add item
function addItem(e){
e.preventDefault();

// get input value
var newItem = document.getElementById('inputd').value;

//Create list item
var li = document.createElement("li");

// add list class
li.className = "list-group-item";

// create text node to append value
li.appendChild(document.innerText = newItem);

items.appendChild(li);


}
