let person= {
    name: "Eduard",
    age: "18",
    city: "almaaty"

};
console.log(person);

// 2
person.city = "astana"
console.log(person);

// 3
const person= {
    name: 'Алексей',
    age: 30,
    greet: function () {
        console.log('Привет, меня зовут' ,this.name, "мне " ,this.age, 'лет!');
    }
};
person.greet();
// 4
const obj1 = { a: 10, b: 20 }
const obj2 = { a: 10, b: 20 }
console.log( obj1==obj2)
console.log(obj1=== obj2)
// 5
const book ={
    title :"Васап ма бой",
    author :"Эдуард",
    details:{
        year:2008,
        pages:300

    }
};
const copyBook= Object.assign({}, book)//ну так должно быть так код написан )))
copyBook.details.year= 2025
console.log(book.details.year)
// 6
const calculator={
    a:5,
    b:3,
    sum(){
        return this.a + this.b
    },
    multiplay(){
        return this.a*this.b
    }
}
console.log(calculator.sum())
console.log( calculator.multiplay())


// 7
const car = Object.freeze({
  brand: 'Toyota',
  model: 'Corolla'
});

car.model = 'Camry'; // Ошибка будет ту ту ту ,нельзя переназначить const
console.log(car.model); 