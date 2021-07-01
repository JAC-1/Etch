const grid = document.querySelector(".grid");
const button = document.getElementById("sizeButton");
const colorChooser = document.getElementById("color-chooser");
const reloadButton = document.getElementById("reload-button");


function addBox(num){
  // Adds a grid of squares based on user input, then generates grid to organize the squares.
  numBoxes = num ** 2;
  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("onmouseover", "");
    grid.appendChild(box);
  }
  grid.style.backgroundColor = "black";
  grid.style.gridTemplateColumns = `repeat(${num}, auto)`;
  grid.style.gridTemplateRows = `repeat(${num}, auto)`;
}


function randomColor() {
  // Generates random rgb color
  let nums = [...Array(3)].map(() => Math.floor(Math.random()*255).toString());
  let rgb = `rgb(${nums[0]}, ${nums[1]}, ${nums[2]})`;
  return rgb;
}



// Add random colors to color selector
function colorBoxs() {
  let rndcolors = []
  for (let i = 0; i < 9; i++){
    rndcolors.push(randomColor());
    console.log(rndcolors);
  }
  for (let i = 0; i < 9; i++) {
    let colorBox = document.createElement("button");
    colorBox.setAttribute("style", `background: ${rndcolors[i]}`);
    colorBox.setAttribute("value", rndcolors[i]);
    colorBox.setAttribute("class", "color")
    colorChooser.appendChild(colorBox);
  }
  return rndcolors;
}

toggle = true

function gridswitch(selectedColor) {
  let boxes = document.querySelectorAll(".box");
  let str = "style = " + "'" + `background: ${selectedColor}` + "'";

  // Change the colors of the etch boxes
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      box.setAttribute("style", `background-color: ${selectedColor}`);
      console.log(str);
    });
  });

  // If toggle true, apply mouseover attribute, if not remove mouseover attribute
  grid.addEventListener("click", () => {
    if (toggle){
      boxes.forEach((box) => {
        box.setAttribute("onmouseover", str);
        console.log(str);
        });
    } else {
      boxes.forEach((box) => {
        box.onmouseover = "";
      });
      console.log("no");
    }
    toggle = !toggle;
  });
}

//


reloadButton.addEventListener("click", () => {
  window.location.reload();
});


// Capture value given by color selected from the color pallet.


let selected = colorBoxs()[Math.floor(Math.random() * 9)];
const potentialColors = document.querySelectorAll(".color");



let toggleZ = true;
let num = 0;
button.addEventListener("click", () => {
  if (toggleZ) {
    num = prompt("How Big");
    while (num > 60) {
      num = prompt("Any number bellow 60, please");
    }
    addBox(num);
    gridswitch(selected);
    toggleZ = false;
  }
});

potentialColors.forEach((color) => {
  color.addEventListener("click", () => {
    selected = color.value;
    gridswitch(selected);
    gridswitch(selected);
    console.log(selected);
  });
});
