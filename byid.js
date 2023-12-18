const main = document.getElementById("main-heading");

main.textContent = "Fruit World";
main.style.color = "orange";

const header = document.getElementById("header");

header.style.background = "green";
header.style.borderBottom = "3px solid orange";

const subt = document.getElementById("basket-heading");

subt.style.color = "green";

const thanksDiv = document.getElementById("thanks");
const paragraphElement = document.createElement("p");
paragraphElement.textContent = "Please visit us again";

thanksDiv.appendChild(paragraphElement);
