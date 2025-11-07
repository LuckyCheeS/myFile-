// 2
// const button = document.querySelector('#button');

// button.addEventListener('click', () => {
//    alert("Событие обработано через JS");
// });

// 3------------------------------------------------

// const div = document.querySelector('#myDiv');

// div.addEventListener('mouseover', () => {
//    console.log("Элемент нажат")
// });

// div.addEventListener("click", () =>{
//    div.style.backgroundColor = 'blue';
// });


// 4------------------------------------------------
// const button = document.querySelector('#textInput');

// button.addEventListener('keypress', (event) => {
//    console.log('Клавиша нажата',event.key);
// });

// 5------------------------------------------------------
// const link = document.getElementById("myLink");
// link.addEventListener("click",(event) =>{
//    event.preventDefault();

//    console.log("Переход по ссылке отменен")
// });
// 6------------------------------------------------------
// const listItems = document.querySelectorAll("#list li");
// listItems.forEach(item =>{
//    item.addEventListener("click",()=>{
//       console.log('Улик по :',item.textContent)
//    })
// })
// 7------------------------------------------------------
document.addEventListener('keydown', (event) => {
   console.log('Клавиша нажата:', event.key);
});