// Get references to input box and list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
  // Check if the input is empty (ignoring spaces)
  if (inputBox.value.trim() === "") {
    alert("Write something"); // Show an alert if the input is empty
  } else {
    let li = document.createElement("li"); // Create a new list item (task)
    li.innerHTML = inputBox.value; // Set the list item's content to the input value
    listContainer.appendChild(li); // Add the new task to the list container

    let span = document.createElement("span"); // Create a span for the delete icon
    span.innerHTML = "\u00d7"; // Unicode for '×' symbol to represent the delete icon
    li.appendChild(span); // Append the span to the list item
  }

  inputBox.value = ""; // Clear the input field after adding the task
  saveData(); // Save the updated task list to localStorage
}

// Event listener to handle task interactions (clicking on tasks or delete button)
listContainer.addEventListener(
  "click",
  function (e) {
    // If the list item (task) is clicked, toggle the "checked" class to mark as done
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData(); // Save the updated state to localStorage
    }
    // If the delete button (×) is clicked, remove the task
    else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the task
      saveData(); // Save the updated task list to localStorage
    }
  },
  false
);

// Function to save the current state of the task list to localStorage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML); // Save innerHTML of the list container
}

// Function to show tasks on page load (from localStorage)
function showTask() {
  // Retrieve tasks from localStorage and render them inside the list container
  listContainer.innerHTML = localStorage.getItem("data") || ""; // If no tasks, default to an empty string

  // Remove checked tasks from the list
  const tasks = listContainer.querySelectorAll("li.checked");
  tasks.forEach((task) => task.remove()); // Remove each checked task

  // Save the updated list without the checked tasks back to localStorage
  saveData();
}

// Call showTask function to load tasks and filter checked ones when the page loads
showTask();
