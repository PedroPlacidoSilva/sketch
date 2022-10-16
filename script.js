// Updates the number of div squares on input change of the slider
function grid(squares) {
  // Removes all div elements if they exist. Reset divs
  const elements = document.getElementsByClassName("square");
  // Delete div with index 0 if exists
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  // Calculate the width and height of each div
  // pixelForSquase: Store the number of pixels of each side of square
  let pixelsForSquare = Math.sqrt(
    (480 * 480) / (parseInt(range.value) * parseInt(range.value))
  );

  // Makes the Board to Sketch
  for (let i = 0; i < squares * squares; i++) {
    // Create a div for every square of the board

    // Create a div tag
    let square = document.createElement("div");
    // Add a class to the div (Change an attribute)
    square.classList = "square";
    // Set the width and the height of each square to the value of pixels for square pixels
    square.style.width = pixelsForSquare + "px";
    square.style.height = pixelsForSquare + "px";
    // Append div to the div "sketchBoard"
    document.getElementById("sketchBoard").appendChild(square);
  }

  // Get all elements of squares and add event listener to each square
  let allSquares = document.getElementsByClassName("square");
  let radioSelected = document.querySelectorAll('input[name="choiceBtn"]');

  // Check which radio button as been selected

  for (const radio of radioSelected) {
    radio.addEventListener("click", () => {
      // Add event listener to all squares on mouse mousemove and set the squares ink to randomColor or Black

      if (radio.value == "randomColor") {
        for (let i = 0; i < allSquares.length; ++i) {
          allSquares[i].addEventListener("mousemove", randomRGB);
        }
      } else {
        for (let i = 0; i < allSquares.length; ++i) {
          allSquares[i].addEventListener("mousemove", changeColor);
        }
      }
    });
  }
}

// Change color to "Black for every square touched"
function changeColor() {
  this.style.backgroundColor = "black";
}

// Change color to random "RGB"
function randomRGB() {
  // Set random number for rgb variables between 0 and 255
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  // Define the color for each time the event listener is applied
  this.style.backgroundColor = `rgb(${r},${b},${g})`;
}

let range = document.getElementById("boardRange");
// Sets the first number of div's on upload
grid(range.value);
// Updates the value of the Slider and radio button when changed
let btnUpdate;
range.addEventListener("input", function () {
  document.getElementById("rangeValue").innerHTML = range.value;
  btnUpdate = document.querySelectorAll('input[name="choiceBtn"]');
  // Unchecks radio button when slider updates
  for (const btn of btnUpdate) {
    btn.checked = false;
  }
  // Updates the grid
  grid(range.value);
});
