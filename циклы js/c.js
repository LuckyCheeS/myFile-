let count = 0;
while (count  < 10) {
   count++;
   console.log(count);
}
// 2
let count1 = 0;

while (count1 < 10) {
   count1++;
   if (count1 === 5) {
       continue; 
   }
   else if (count1 === 8){
       break
   }
   console.log(count1);
}


// 3
let count2 = 0;
do {
   console.log(count2 < 5);
   count2++;
} while (count2 < 6);

// 4
while(true){
    let numbers1 = prompt('Введите число 10 чтобы выйти ');
    if (numbers1 ==='10'){
        console.log('Цикл завершен!');
        break
    }

}
// 5
for (let i = 1; i < 11; i++) {
       
       console.log(i);
   
};
// 6
let i=0
for (;;) {
   console.log(i);
   i++;
   if(i>100){
    break;
   }
};
// 7
let numbers = [1,2,3,4,5];

for(let i =0 ;i < numbers.length; i++){
    console.log(numbers[i])
}

//8
let input ='';
while(input!=="stop"){
    input=prompt("Введите слово stop для остановки")
}

//а для циклов while
//для интераций удобнее for

for (let i =1; i<=5; i++){
    console.log(i);
}

//9
for(let i=10; i>=1; i--){
    console.log(i);
}

//10
for (let i=1;i<=10;i++){
    if(i%2!==0)continue;
    console.log(i);
}