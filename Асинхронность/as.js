// 1
setTimeout(() => console.log('Пирвет мир'), 2000);

// 2
const intervalId = setInterval(() => {
    let date= new Date();
    let time = date.getHours();
    let timeM = date.getMinutes();
    let timeS = date.getSeconds();
    console.log(`${time}:${timeM}:${timeS}`)

 }, 1000);
//   3
setTimeout(() => {
   clearInterval(intervalId);
 }, 5000);
//  4
function fetchData(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Данные получены!");
        },3000)
    });
}
fetchData().then(result => console.log(result))
// 5
function fetchDataError(){
    return new Promise((_,reject) =>{
        setTimeout(()=>{
            reject("Ошибка загрузки!");
        },2000)
    });
}
fetchDataError().catch(error => console.log(error))
// 6
async function fetchDataAsync () {
    const result= await fetchData();
    return result;
}
fetchDataAsync().then(console.log);
// 7
async function fetchDataErrorAsync() {
  try {
    const result = await fetchDataError();
    console.log(result);
  } catch (error) {
    console.log("Произошла ошибка:", error);
  }
}

fetchDataErrorAsync();

// 8
function task1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task1 done"), 1000);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Task2 done"), 2000);
  });
}

async function runTasksSequential() {
  const result1 = await task1();
  console.log(result1);

  const result2 = await task2();
  console.log(result2);
}

runTasksSequential();
// 9
function taskA() {
  return new Promise(resolve => {
    setTimeout(() => resolve("TaskA complete"), 2000);
  });
}

function taskB() {
  return new Promise(resolve => {
    setTimeout(() => resolve("TaskB complete"), 3000);
  });
}

Promise.all([taskA(), taskB()]).then(results => {
  console.log(results[0]);
  console.log(results[1]);
});
// 10
async function delayedMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  console.log(message);
}

delayedMessage("Абоба через 2 секунды XDDDD", 2000);

