// object destructuring

const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    greeting(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I'm from ${this.city}.`);
    }
}

// const printName = (personData) =>{
//     console.log(personData.name);
// }

const printName = ({name}) =>{
    console.log(name);
}

printName(person);

const {name, age, city, greeting} = person;

console.log(name, age, city);

// Array destructuring

const numbers = [1, 2, 3, 4, 5];

const [numberOne, numberTwo, numberThree, numberFour, numberFive] = numbers;

// can choose any name for the variables, but the order matters

console.log(numberOne, numberTwo, numberFive);

