/// Global Variables
const container = document.querySelector('.container');
let colorPen = "black";
let gridSize = 16; 
createGrid(gridSize);
/// Resolution is 480px


/// Functions

function createGrid(gridLargo) {
    gridLargo = gridSize;
    let numF = (gridSize**2)+1;
    let squareDim = ((480/parseInt(gridLargo)));
    let dim = squareDim.toString()
    char = 'background: white; box-sizing: border-box; border-style: solid; border-width: 1px; border-color: black; width:' + dim + 'px; height:' + dim + 'px;';

    for (let i = 1; i <  numF; i++) {
        let grid = document.createElement('div');
            grid.classList.add('grid');
            grid.style.cssText = char;  
    container.appendChild(grid);
    }
}

function removeGrid() {
// While "container.firstChild" is not null then remove the child node "container.firstChild" from the DOM "container"
    while(container.firstChild != null) {
      container.removeChild(container.firstChild);
    }
// After everything is remove, then create the grid again
createGrid();
}

function grid() {
    let line = prompt("Select a Grid Size");
    gridSize = parseInt(line);
    num = (parseInt(line)**2)+1;
  
    return removeGrid()
} 



function randomColor(){
    colorPen = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}

function blackColor() {
    colorPen = 'black';
}

function eraser() {
    colorPen = 'white';
}




///Event Listeners

const pen = document.querySelector(".container");
pen.addEventListener("mouseover", function( event ) {
      event.target.style.backgroundColor = colorPen;
   }, false);



