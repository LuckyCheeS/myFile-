// Задание 1 
const greet = function(x){
    console.log("Привет,"+x+"!");
};

greet("Мир");



// Задание 2
function sayHello(x){
    console.log("hello,"+x);
}
    
x = prompt (('введите ваше имя'));
sayHello(x);


// Задание 3 
let z = parseInt(prompt ('Введите 1 число'))
let y = parseInt(prompt ('Введите 2 число'))
function sum (z,y){ 
    return z+y
}
console.log(sum(z,y));





// Задание 4
function isEven(num){
    if (num%2===0){
        return true;
    }else{
        return false;
    }

}
let num =prompt("введите число")
let result = isEven(num)
console.log('Число четное?', result);


// Задание 5
function max(a,b){
    if (a>b){
        return"Большее число "+ a;
}   else if (b>a){
        return'Большее число'+ b
}   else {
        return "Числа равны"
}
}

let num3 = Number(prompt("Введите первое число "));
let num4 = Number(prompt("Введите первое число "));

let result1 = max(num3, num4);
console.log(result1);


// // Задание 6
// function getinitials (firstName,lastName){
//     const initial = firstName[0]+"."+ lastName[0]+'.'
//     return initial;
// }
// const firstName = prompt("Введите Имя:")
// const lastName = prompt("Введите фамилию")
// console.log(getinitials(firstName,lastName));


// // Задание 7
// function square(num){
//     return num*num;
// }
// function cube(num){
//     return num * square(num);
// }
// const number= Number(prompt("Введите число:"));

// console.log('Квадрат числа:', square(number));

// console.log("Куб числа:",cube(number));


// // Задание 8
// let z = parseInt(prompt ('Введите 1 число'))
// let y = parseInt(prompt ('Введите 2 число'))
// const add =(z,y)=>z+y;
// console.log(add(z,y) );


// // Задание доп задание
// function getFactorial(num){
//     if (num==0){
//         return 1
//     }
//     else if (num==1){
//         return 1 
//     }
//     else {return num*getFactorial(num-1)}
// }

// console.log(getFactorial (5))