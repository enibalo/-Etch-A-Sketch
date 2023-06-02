//comment
function createGrid(answer){
    let length = (500)/answer;
   
    let totalBoxes = answer * answer;
    for (let i = 0; i < totalBoxes; i++){
        let box = document.createElement("div");
        box.style.boxSizing = "border-box";
        box.style.width = length+"px";
        box.style.height = length+"px";
        box.style.border = "1px solid grey";
        box.style.flex = "auto";
        box.style.margin = "0px";
        box.style.padding = "0px";
        box.classList ="box";
        box.addEventListener("mouseenter", function(){
        box.style.backgroundColor = "black";
        });
        container.appendChild(box);
    }
}

const container = document.querySelector(".container");
createGrid(16);

const penSize = document.querySelector(".pen");
penSize.addEventListener("click", function(){
    let answer = Number(prompt("Pen Size (Max. = 100)"));
    answer = (answer <=100 && answer > 0)? answer:16;
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(aBox){
        container.removeChild(aBox);
    })
    createGrid(answer);
});


const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", function(){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(aBox){
        aBox.style.backgroundColor = "white";
    })
})

const penColor = document.querySelector(".pen-color");
const palette = document.querySelector(".palette-color");

penColor.addEventListener("click", function(){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(aBox){
        aBox.addEventListener("mouseenter", function(){
            aBox.style.backgroundColor = palette.value;
            })
    })
})


const penRainbow = document.querySelector(".pen-rainbow");

penRainbow.addEventListener("click", function(){
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(aBox){
        aBox.addEventListener("mouseenter", function(){
        let value = ()=> Math.floor(Math.random() * 256);
        aBox.style.backgroundColor = "rgb(" + value() + "," + value() + "," + value() + ")";
        })
    })
})