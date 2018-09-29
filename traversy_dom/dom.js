// initialize variables
var form = document.getElementById('addForm');
var items = document.getElementById('items');
var remButtons = document.getElementsByClassName('delete');
var filter = document.getElementById('filter');


// Form submit event listener
form.addEventListener('submit', addItem);

// Event listener for delete button
items.addEventListener('click', removeItem);

//event listener for filter tag
filter.addEventListener('keyup', filterItems);


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
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  var delButton = document.createElement("button");
  // Append Text Node
  delButton.className="btn btn-danger delete float-right btn-sm";
  // Append Text node
  delButton.appendChild(document.createTextNode("x"));

    //Append Button to <li> Tag
    li.appendChild(delButton);

  items.appendChild(li)
}


//Remove item
function removeItem(e){
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure")){
      var li = e.target.parentElement;
      items.removeChild(li);

    }
  }
}


// Filter items
function filterItems(e){
  //convert text to lowercase
  var text = e.target.value.toLowerCase();

  //Get li html collection
  var itemList = items.getElementsByTagName('li');

  // convert to an array
  Array.from(itemList).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // console.log(text);  it works
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block"
    } else {
      item.style.display = "none"
    }
  })
}
