const generateButton = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  // Clear existing list items so repeated clicks do not create duplicates
  numberList.textContent = "";

  // Loop from 1 through 5 and create each <li> dynamically
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `The number is ${i}`;
    numberList.appendChild(listItem);
  }
}

generateButton.addEventListener("click", generateNumbers);