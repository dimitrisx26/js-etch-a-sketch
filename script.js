const grid = document.querySelector("body > div > div.gridContainer");

for (let i = 0; i < 16; i++) {
    
    for (let z = 0; z < 16; z++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        grid.appendChild(cell);
    }
    
}