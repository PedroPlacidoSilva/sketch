function grid(squares) {
  // Removes all div elements if they exist. Reset divs
  const elements = document.getElementsByClassName("square");
  // Delete div with index 0 if exists
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  // Makes the Board to Sketch
  for (let i = 0; i < squares * 2; i++) {
    // Create a div for every square of the board

    // Create a div tag
    let square = document.createElement("div");
    // Add a class to the div (Change an attribute)
    square.classList = "square";
    // Append div to the div "sketchBoard"
    document.getElementById("sketchBoard").appendChild(square);
  }
}

// Updates the value of the Slider

let range = document.querySelector("input");
// Sets the firt number of div's on upload
grid(range.value);

range.addEventListener("input", function () {
  document.getElementById("rangeValue").innerHTML = range.value;
  grid(range.value);
});
