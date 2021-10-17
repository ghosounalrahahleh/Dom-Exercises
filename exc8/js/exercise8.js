function initGrid() {
  // collect colors in an array
  var colors = [];
  var range = ["00", "33", "66", "99", "cc", "ff"];

  for (var r = 0; r < range.length; r++) {
    for (var g = 0; g < range.length; g++) {
      for (var b = 0; b < range.length; b++) {
        colors.push("#" + range[r] + range[g] + range[b]);
      }
    }
  }

  // TODO complete the rest
  var colorsDiv = document.querySelector("#colors");
  var selected = document.querySelector("#selected");
  colorsDiv.style.display = "flex";
  colorsDiv.style.flexWrap = "wrap";
  for (i = 0; i < 216; i++) {
    var tiles = document.createElement("div");
    tiles.setAttribute("class", "tiles");
    colorsDiv.append(tiles);
    var color = colors[i];
    tiles.style.backgroundColor = color;
    tiles.addEventListener("click", function (event) {
      var source = event.target;
        console.log(source);
      var selsctedBgColor = source.style.backgroundColor;
      selected.innerHTML = selsctedBgColor;
      console.log(selsctedBgColor);
      //   to convert the rgb to hex value
      const rgb2hex = (rgb) =>
        `#${rgb
          .match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
          .slice(1)
          .map((n) => parseInt(n, 10).toString(16).padStart(2, "0"))
          .join("")}`;
      selected.style.backgroundColor = rgb2hex(selsctedBgColor);
    });
  }
}

window.onload = function () {
  initGrid();
};
