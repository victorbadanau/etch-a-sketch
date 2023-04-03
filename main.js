let size = 4;
let gridSize = size * size;
let divWidth = 600 / size;

function generateGrid(gridSize) {
    let container = document.querySelector(".container");
    for (let i = 0; i < gridSize; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList = "square";
        squareDiv.style.width = `${divWidth}px`;
        container.appendChild(squareDiv);
    } 
}
generateGrid(16);