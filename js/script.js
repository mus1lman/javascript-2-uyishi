alert("Assalomu alaykum.");
alert("Saytimizga xush kelibsiz!");

var firstName = prompt("Matn kiriting!");

var paragraph = document.createElement("p");

paragraph.textContent = "Sizning yozgan matningiz : " + firstName;

document.body.appendChild(paragraph);

document.querySelector("p").style.fontSize = "36px";

document.querySelector("p").style.textAlign = "center";

document.querySelector("p").style.marginTop = "400px";

document.querySelector("p").style.fontWeight = "600";