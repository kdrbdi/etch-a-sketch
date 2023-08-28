const container = document.querySelector("#grid-container");
const gridBtn = document.querySelector("#generate-grid");

function randomizeRGB() {
  return `rgb(${Math.floor(Math.random() * 255) + 1},${
    Math.floor(Math.random() * 255) + 1
  }, ${Math.floor(Math.random() * 255) + 1})`;
}

generateGrid();

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
      if (!e.target.classList.contains("hovered"))
        e.target.classList.add("hovered");
      // Randomize Color
      // e.target.style.backgroundColor = randomizeRGB();
      else {
        let bgColor = getComputedStyle(e.target).backgroundColor;
        let opacity = parseInt(bgColor.substr(-2, 1));
        if (opacity < 9) {
          e.target.style.backgroundColor = `rgba(0,0,0, 0.${opacity + 1})`;
        }
      }
    });
  });
}
