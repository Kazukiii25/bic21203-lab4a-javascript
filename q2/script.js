const userInput = document.getElementById("userInput");
const checkButton = document.getElementById("checkBtn");
const resultOutput = document.getElementById("result");

function checkInput() {
  // Remove leading and trailing spaces to catch empty or whitespace-only inputs
  const trimmedValue = userInput.value.trim();

  // Convert string to number (supports integers and decimals like 10.5)
  const numericValue = Number(trimmedValue);

  if (trimmedValue === "" || Number.isNaN(numericValue)) {
    resultOutput.textContent = "Please enter a valid number!";
  } else if (numericValue < 10) {
    resultOutput.textContent = "The number is lower than 10";
  } else if (numericValue > 10) {
    resultOutput.textContent = "The number is higher than 10";
  } else {
    resultOutput.textContent = "The number is equal to 10";
  }
}

checkButton.addEventListener("click", checkInput);