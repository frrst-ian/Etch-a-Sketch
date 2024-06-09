document.addEventListener('DOMContentLoaded', function () {
    // Hide the button initially
    const newGridButton = document.getElementById("newGridButton");
    newGridButton.style.display = "none";

    // Show the button and attach event listener when DOM is loaded
    newGridButton.style.display = "block";
    newGridButton.addEventListener("click", createNewGrid);

    // Function to create new grid
    function createNewGrid() {
        const size = prompt("Enter a new grid size (e.g., 20) : ");
        if (size === null) return;

        const gridSize = Math.min(parseInt(size), 100);
        if (isNaN(gridSize) || gridSize <= 0) return;

        const container = document.getElementById("container");
        container.innerHTML = '';

        const squareSize = 640 / gridSize;

        for (let i = 0; i < gridSize * gridSize; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            div.style.width = `${squareSize}px`;
            div.style.height = `${squareSize}px`;
            container.appendChild(div);
        }

        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = randomHex();
            });
        });
    }

    // Function to create default grid
    function defaultGrid() {
        const container = document.getElementById("container");
        for (let i = 0; i < 256; i++) {
            const div = document.createElement("div");
            div.classList.add('square');
            div.style.width = "40px";
            div.style.height = '40px';
            container.appendChild(div);
        }
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = randomHex();
            });
        });
    }

    // Call the defaultGrid function
    defaultGrid();

    // Function to generate random hex color
    function randomHex() {
        var hexNumbers = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F'
        ];

        // Initialize the color code with #
        var color = '#';

        // Generate six random hexadecimal digits
        for (var i = 0; i < 6; i++) {
            color += hexNumbers[Math.floor(Math.random() * hexNumbers.length)];
        }

        return color;
    }
});
