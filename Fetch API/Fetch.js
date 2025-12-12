fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response=> response.json())
.then(data=> console.log(data))
.catch(error=> console.error("Ошибка:",error));
// 2
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    headers:{
        'Content-Type':'applicaation/json'
    },
    body:JSON.stringify({
        title:"Новый пост",
        body: "Содержимое поста",
        userId: 1
    })
})
.then( response => response.json())
.then(data=>console.log("Ответ" , data))

// 3
fetch('https://jsonplaceholder.typicode.com/nonexistent')
 .then(response =>{if (!response.ok){
    console.error(`Ошибка ${response.status}`)
 }
else {return response.json()}}
     )

 .then(data => console.log(data))    
 .catch(error => console.error('Ошибка:', error));
//  4
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Обновлённый заголовок",
    body: "Тело поста",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

//   delete
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
  .then(response => {
    console.log("Статус:", response.status); 
  });
// 5
async function updatePost() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    headers:{
        'Content-Type':'applicaation/json'
    },
    body:JSON.stringify({
        title:"Новый пост",
        body: "Содержимое поста",
        userId: 1
    })
})
    } 
    catch{console.log("error")}
    
}
updatePost();
// 6
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "GET",
  headers: {
    "Authorization": "Bearer exampletoken123",
    "User-Agent": "TestAgent/1.0"
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
