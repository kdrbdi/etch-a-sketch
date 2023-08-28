const container = document.querySelector("#grid-container");
const gridBtn = document.querySelector("#generate-grid");

function randomizeRGB() {
  return `rgb(${Math.floor(Math.random() * 255) + 1},${
    Math.floor(Math.random() * 255) + 1
  }, ${Math.floor(Math.random() * 255) + 1})`;
}

gridBtn.addEventListener("click", generateGrid);

function generateGrid(numCells = 16) {
  container.innerHTML = "";
  do {
    numCells = parseInt(prompt("num? max 100"));
  } while (!numCells || numCells > 100);

  for (let row = 0; row < numCells; row++) {
    const rowBreak = document.createElement("div");
    rowBreak.classList.add("break");
    container.appendChild(rowBreak);
    for (let cell = 0; cell < numCells; cell++) {
      const square = document.createElement("div");
      square.classList.add("square");
      container.appendChild(square);
    }
  }
  const cells = document.querySelectorAll(".square");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", function (e) {
      e.target.classList.add("hovered");
      e.target.style.backgroundColor = randomizeRGB();
    });
  });
}
