const default_color = "#333333";
const default_mode = "color";
const default_size = 16;

let currentColor = default_color;
let currentMode = default_mode;
let currentSize = default_size;

function setCurrentColor(newColor) {
    currentColor = newColor;
}

function setCurrentMode(newMode) {
    toggleButton(newMode)
    currentMode = newMode;
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

const colorPicker = document.getElementById("color-picker");
const colorButton = document.getElementById("color-button");
const rainbowButton = document.getElementById("rainbow-button");
const eraserButton = document.getElementById("eraser-button");
const clearButton = document.getElementById("clear-button");
const sizeValue = document.getElementById("size-value");
const sizeSlider = document.getElementById("size-slider");
const grid = document.querySelector(".grid");
let gridWidth = grid.clientWidth;

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorButton.onclick = () => setCurrentMode("color");
rainbowButton.onclick = () => setCurrentMode("rainbow");
eraserButton.onclick = () => setCurrentMode("eraser");
clearButton.onclick = () => reloadGrid();
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value);
sizeSlider.onchange = (e) => changeSize(e.target.value);

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value) {
    sizeValue.textContent = `${value} x ${value}`;
}

function reloadGrid() {
    clearGrid();
    generateGrid(currentSize);
}

function clearGrid() {
    grid.textContent = "";
}

function generateGrid(size) {
    for (let i = 0; i < size * size; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList = "square";
        squareDiv.style.width = `${gridWidth/size}px`;
        squareDiv.addEventListener('mouseover', changeColor);
        squareDiv.addEventListener('mousedown', changeColor);
        grid.appendChild(squareDiv);
    } 
}

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function changeColor(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (currentMode === "rainbow") {
        const R = Math.floor(Math.random() * 256)
        const G = Math.floor(Math.random() * 256)
        const B = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
    else if (currentMode == "color") {
        e.target.style.backgroundColor = currentColor;
    }
    else if (currentMode == "eraser") {
        e.target.style.backgroundColor = "white";
    }
}
// Function to dimm a color:
// function shadeColor(color, percent) {
//     let R = parseInt(color.substring(1,3),16);
//     let G = parseInt(color.substring(3,5),16);
//     let B = parseInt(color.substring(5,7),16);
    
//     R = parseInt(R * (100 + percent) / 100);
//     G = parseInt(G * (100 + percent) / 100);
//     B = parseInt(B * (100 + percent) / 100);
    
//     R = (R<255)?R:255;
//     G = (G<255)?G:255;
//     B = (B<255)?B:255;
    
//     let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
//     let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
//     let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
    
//     return "#"+RR+GG+BB;
// }

function toggleButton(newMode) {
    if (currentMode === 'rainbow') {
        rainbowButton.classList.remove('active');
      } 
    else if (currentMode === 'color') {
        colorButton.classList.remove('active');
      } 
    else if (currentMode === 'eraser') {
        eraserButton.classList.remove('active');
      }
    
    if (newMode === 'rainbow') {
        rainbowButton.classList.add('active');
      } 
    else if (newMode === 'color') {
        colorButton.classList.add('active');
      } 
    else if (newMode === 'eraser') {
        eraserButton.classList.add('active');
      }
    }
    
window.onload = () => {
    generateGrid(default_size);
    toggleButton(default_mode);
}