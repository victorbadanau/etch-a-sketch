let size = 16;
let gridSize = size * size;

function generateGrid() {
    let container = document.querySelector(".board");
        containerWidth = container.clientWidth;
    for (let i = 0; i < gridSize; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList = "square";
        squareDiv.style.width = `${containerWidth/size}px`;
        container.appendChild(squareDiv);
    } 
}
generateGrid();

const squareHover = document.getElementsByClassName("square");
   Array.from(squareHover).forEach(function(div) {
    div.addEventListener("mouseenter", function() {
        this.style.background = "yellow";
    });
    div.addEventListener("mouseleave", function() {
        this.style.background = "red";
    })
   })