const changeProperties = function () {
  let width = document.getElementById("width-input").value;
  let height = document.getElementById("height-input").value;
  let colour = document.getElementById("colour-input").value;
  let box = document.getElementById("colour-box");

  box.style.width = width + "px";
  box.style.height = height + "px";
  box.style.backgroundColor = colour;
};

document.getElementById("button").addEventListener("click", changeProperties);
