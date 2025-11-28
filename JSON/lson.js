// // 1
// localStorage.setItem('greeting', 'Привет,мир!');
// const name = localStorage.getItem('greeting');
// // 2
// localStorage.removeItem('greeting')
// const name = localStorage.getItem('greeting');
// 3
var user = { name: 'Alice', age: 25}
const userJSON = JSON.stringify(user); 
localStorage.setItem('user', userJSON);
const storedUser = localStorage.getItem("user")
const parsedUser = JSON.parse(storedUser);
console.log(parsedUser)
// 4
const us = localStorage.getItem("user")
const usNew = JSON.parse(storedUser);
usNew.counry='Almaty'
localStorage.setItem('user',JSON.stringify(usNew));
console.log(usNew)
// // 5
// let savedUser = localStorage.getItem("user");
 
// if (savedUser){
    
//     console.log(JSON.parse(savedUser));
// }else{
//     console.log("Не найдено");
//     let newUser={
//         name:"Eduard",
//         age: 17

        

//     }
// localStorage.setItem("user",newUser.stringify(savedUser))
// console.log(newUser)};

// // 6
// localStorage.clear();

// console.log(user)
// // 7
// const tasks=[
//     {title:"Сделать уроки", completed:false},
//     {title:"Погулять с собакой", completed:true},
//     {title:"Покушать?))", completed:true}
// ];
// localStorage.setItem('tasks',JSON.stringify(tasks));
// a=localStorage.getItem('tasks')
// let savedTasks=JSON.parse(a);
// console.log(savedTasks);
// // 8
// if (tasks){
//     tasks[0].completed=true;
//     localStorage.setItem('tasks',JSON.stringify(tasks));
//     console.log("Обновленный список задач:", tasks);
// }else{
//     console.log("Список задач не найдено")
// }