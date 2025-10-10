let age = 30;
console.log(age); 

age = 31; // ну потомучто так можно ))
console.log(age);
const birthYear = 1990;
console.log(birthYear);//нууу вот это нельзя заменять ошибка будет )))

//var устарел молодняк заменил его
let integer = 42; //num
let singleQuote = 'Hello';//str
let isTrue = true;//boolean
let notANumber = NaN;
let invalidOperation = 0 / 0;// спец значение NaN
let user = null;
console.log(user); //null
let undefinedValue;
console.log(undefinedValue,typeof(undefinedValue)); //underfindValue

let num = 123;
let strNum = String(num);
console.log(strNum);

let nullValue = null;
let undefinedValue1 = undefined;

console.log(Number(nullValue)); // Вывод: 0

console.log(String(undefinedValue1)); // Вывод: "undefined"

let numer = 123;
console.log(numer,typeof numer);
numer = String(numer); 
console.log(numer,typeof numer);

let n = prompt('как вас зовут?')
console.log(n)
let a = prompt('Сколько вам лет ?')
console.log(a)