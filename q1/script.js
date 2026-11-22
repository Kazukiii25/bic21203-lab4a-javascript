// 1. Select the paragraph and button using DOM methods
const messageParagraph = document.getElementById("message");
const changeButton = document.getElementById("changeBtn");

// 2. Define the named function to update the text safely
function changeMessage() {
  messageParagraph.textContent = "Hello there!";
}

// 3. Register the click event listener (no inline onclick)
changeButton.addEventListener("click", changeMessage);