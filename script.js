const container = document.querySelector(".container");
const input = document.querySelector("input");
const resetBtn = document.querySelector(".reset-btn");
const createBtn = document.querySelector(".create-btn");
const span = document.querySelector("span");

createBtn.addEventListener('click', createDivs)
resetBtn.addEventListener('click', () => container.querySelectorAll('*').forEach(child => child.style["background-color"] = "white"));

function updateColor () {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    this.style["background-color"] = `rgb(${r}, ${g}, ${b})`;
}

function createDivs () {
    let gridSize = parseInt(input.value);
    container.querySelectorAll('*').forEach(child => child.remove());

    if (!Number.isInteger(gridSize) || gridSize < 0 || gridSize > 100) {
        input.classList.add("alert");
        span.classList.remove("hide");
        input.value = "";
        input.placeholder="Please enter a Valid Integer Value (0 - 100)";
        input.focus();
    } else {
        input.classList.remove("alert");
        span.classList.add("hide");

        for (let i = 0; i < gridSize; i++){
            let row = document.createElement("div");
            row.classList.add("row");

            for (let j = 0; j < gridSize; j++) {
                let column = document.createElement("div");
                column.classList.add("column");
                column.addEventListener('mouseover', updateColor);
                row.appendChild(column);
            }

            container.appendChild(row);
        }   
    }
}



