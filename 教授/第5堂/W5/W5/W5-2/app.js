const h1 = document.getElementById("main-title");
console.log(h1);

h1.style.color = "white";
h1.style.backgroundColor = "purple";
h1.textContent = "Dive into Document Model";

const header = document.querySelector("header");
console.log(header);
header.innerHTML = "<h2>Dive into Document Model </h2>";
