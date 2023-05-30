
function createGrid(answer){
    let length = (500 - answer*2)/answer;
   
    let totalBoxes = answer * answer;
    for (let i = 0; i < totalBoxes; i++){
        let box = document.createElement("div");
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
    answer = (answer <=100)? answer:16;
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(function(aBox){
        container.removeChild(aBox);
    })
    createGrid(answer);
});
