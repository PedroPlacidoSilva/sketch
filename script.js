function grid(squares) {
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

range.addEventListener("input", function () {
  document.getElementById("rangeValue").innerHTML = range.value;
});

grid(16);
