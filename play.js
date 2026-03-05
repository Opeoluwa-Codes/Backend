var name = "Max"
var age = 28;
var hobbies = false;

function summarizeUser(userName, userAge, userHobbies) {
    return ("Name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHobbies);
    /* these functions can only be called in here because of what is calle scope in Javascript */
}

console.log(summarizeUser(name, age, hobbies));

/* you can decide to change values when using let*/
/* for consts, the value is fixed and cannot be changed */

/* ARROW FUNCTION */

const arrow = (userName, userAge, userHobbies) => {
    return(
        "name is " + userName + ", age is " + userAge + " and the user has hobbies: " + userHobbies
    );
}

console.log(arrow(name, age, hobbies));

const simpler = (a, b) => {
    return a + b;
}

/* or */

const simplest = (a, b) => a + b;

console.log(simpler(2, 3));
console.log(simplest(2, 3));

const addOne = a => a + 1;

console.log(addOne(5));

const addRandom = () => Math.random();

console.log(addRandom());

var name = "Opeoluwa";
var age = 26;
const sex = "male";


const Opeoluwa = (name, age, sex) =>{
    return(
        "my name is " + name + ", my age is " + age + ", and I am " + sex
    )
}

console.log(Opeoluwa(name, age, sex));