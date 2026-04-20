// Save references
const textField = document.getElementById("itemInput");
const addButton = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");
const feedback = document.querySelector(".feedback");


// Start function addItem
function addItem(){

    // Create list item
    const li = document.createElement("li");

    // Check if user entered value
    if(textField.value !== ""){

        // Assign text to list item
        li.textContent = textField.value;

        // Append list item
        itemList.appendChild(li);

        // Clear feedback
        feedback.textContent = "";

        // Clear text field
        textField.value = "";

        // Put cursor back
        textField.focus();

    }

    else{

        // Print error
        feedback.textContent = "Nothing entered!";

    }

}

// Register click event
addButton.addEventListener("click", addItem);s