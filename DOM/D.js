let massage =document.getElementById("massage")
massage.textContent="Добро пожаловать в JavaScript!"
// 2
let box1 = document.getElementsByClassName("box");
for (let i =0 ; i < box1.length;i++){
box1[i].style.backgroundColor='green';
}
// 3
let p = document.querySelector("#text");
p.textContent="New text";
let allBoxes=document.querySelectorAll('.box2')
allBoxes.forEach(box2=>{
    box2.style.border="2px solid blue";
})
//4
let highlighted= document.querySelectorAll('.highlight');
highlighted.forEach(p=>{
    p.style.color="red";
})