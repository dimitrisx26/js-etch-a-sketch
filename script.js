const grid = document.querySelector("body > div > div.gridContainer");
const buttons = document.querySelectorAll("body > div > div.header > div > button")

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let z = 0; z < gridSize; z++) {
            cell = document.createElement("div");
            cell.className = `cell${gridSize}`;
            grid.appendChild(cell);
        };
        
    };
};

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.value == "clear") {
            while (grid.hasChildNodes()) {
                grid.removeChild(grid.firstChild);
            }
            createGrid(gridSize); 
            
        } else {
            gridSize = button.value;
            while (grid.hasChildNodes()) {
                grid.removeChild(grid.firstChild);
            }
            createGrid(gridSize);            
        };
    });
});

grid.addEventListener("mouseover", function (e) {
    // But only alert for elements that have an alert-button class
    if ((e.target.classList.contains("cell16")) || (e.target.classList.contains("cell32")) || (e.target.classList.contains("cell64"))) {
        e.target.classList.add("selected");
        console.log("hover");
    }
});


createGrid(gridSize);