const container = document.querySelector(".container");
let length = Math.round(500/16) -4;
let totalBoxes = 16 * 16;
for (let i = 0; i < totalBoxes; i++){
    let box = document.createElement("div");
    box.style.width = length+"px";
    box.style.height = length+"px";
    box.style.border = "2px solid grey";
    box.style.flex = "auto";
    box.addEventListener("mouseenter", function(){
       box.style.backgroundColor = "black";
    });
    container.appendChild(box);
}

