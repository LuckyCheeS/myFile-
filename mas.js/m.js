let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

//задание2
console.log(fruits[0]);
console.log(fruits[2]);
fruits.push("Груша")
console.log(fruits);

//задание3
fruits.pop()
fruits.shift()
console.log(fruits);

//задание4
fruits.forEach((i)=>console.log(i))
//задание5
let lengths = fruits.map((i)=> i.length)
console.log(lengths)

//задание6
let numbers = [1,2,3,4,5,6,7,8,9,10];
let num = numbers.filter(i => i %2 ===0)
console.log(num)

//задание7
let num1 = numbers.reduce((acc,num1)=> acc+num,0);
console.log(num1)

//задание8
const result= numbers.find(num=>num>5)
console.log(result)

//задание9
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//задание10
let fruits1 = ["Apple", "Banana", "Cherry"];
let hasBanana = fruits1.includes("Banana");
console.log(hasBanana);

//задание11
fruits1.reverse();
console.log(fruits1);