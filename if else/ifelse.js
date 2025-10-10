//1 Задание
let x =parseInt(prompt("введите число "))

if(x>10){
    console.log("число больше 10");
}else{console.log("число меньше или ровно 10");};


//3 задание

let y = parseInt(prompt("Сколько вам лет?"))

if(y<18){
    console.log("вы ещё подросток");
}else if (y>18 && y<30){
    console.log("вы молодой взрослый ")
}else console.log("Вы взрослый ")

//2 Задание 
let a = confirm("Вы уверенны, что хотите удалить файл ? ")
if (a){
    console.log("файл удален")
}else{
    console.log("Удаление отменено")
}

//4 Задание

let z = parseInt(prompt("Введите число"))

if (z%2==0){
    console.log("число четное")
}else{
    console.log("число не четное")
}

//5Задание

let o = prompt("укажите день недели")
let message
switch(o){
    case "1":
        message="понедельник"
        break;
    case "2":
        message="вторник" 
        break;
    case "3":
        message="среда"
        break;
    case "4":
        message=" четверг"
        break;
    case "5":
        message="пятница"
        break;
    case "6":
        message="суббота"
        break;
    case '7':
        message="воскресенье"
        break;
    default:
        message="некорректное значение"
}
console.log(message);

//6 задание
let k = parseInt(prompt("укажите первое число"))
let j = parseInt(prompt("укажите второе число"))

if (k>j){
    console.log("первое чило больше второго")
}else{  (j>k)?console.log("второе число больше первого"):console.log("числа равны")}   


    
let l = prompt("укажите какой по счету месяц")

switch(l){
    case "1":
        l="Зима"
        break;
    case "2":
        l="Зима" 
        break;
    case "3":
        l="Весна"
        break;
    case "4":
        l=" Весна"
        break;
    case "5":
        l="Весна"
        break;
    case "6":
        l="Лето"
        break;
    case '7':
        l="Лето"
        break;
    case "8":
        l="Лето"
        break;
    case "9":
        l="Осень"
        break;
    case "10":
        l="Осень"
        break;
    case "11":
        l="Осень"
        break;
    case "12":
        l="Зима"
        break;
    default:
        l="некорректное значение"
    
}
console.log(l);
