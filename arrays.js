const hobbies = ['coding', 'gaming', 'cooking'];

/* store text, value, boolean, and number data types in arrays */


for (let list of hobbies){
    console.log(list);
}

console.log(hobbies)

console.log(hobbies.map(hobby => 'Hobby: ' + hobby))

//why hobby and not hobbies?
// The parameter `hobby` is used in the map function because it represents each individual element of the array as the map function iterates over it.


const game = ['Minecraft', 'Fortnite', 'Call of Duty'];

console.log(game.map(x => 'Game: ' + x))

const fruits = [];
fruits.push("banana", "cashew", "orange", "mango");
console.log(fruits.length)

fruits[10] = "grape";
console.log(Object.keys(fruits));
console.log(fruits.length);
// adding an element at index 10 creates empty slots in the array from index 4 to index 9, which are not counted as elements but still contribute to the length of the array. Therefore, the length becomes 11, even though there are only 5 actual elements in the array.

fruits.lenght = 20;
console.log(Object.keys(fruits));
console.log(fruits.length);
// changing the length property of an array does not affect the actual number of elements in the array. It only changes the value of the length property, which is used to determine the number of elements in the array. Therefore, even though we set fruits.length to 20, it does not add any new elements to the array, and the actual number of elements remains 11.

const numbers = [1, 2, 3, 4, 5];
numbers[5] = 6;
numbers.forEach((item, index) => {
    console.log(`${index}: ${item}`);
})
for (let list of numbers){
    console.log(list);
}

// create a string using .join() method

const words = ['Hello', 'world', 'this', 'is', 'JavaScript'];
const wordsString = words.join(",");
console.log (wordsString);


// use indexOf() method to find the index of an element in an array

const dickSizes = [5, 6, 7, 8, 9];
console.log(dickSizes.indexOf(7));


// use includes() method to check if an element is in an array

console.log(dickSizes.includes(20));

// alternatively, we can use indexOf() to check if an element is in an array

console.log(dickSizes.indexOf(20) !== -1);

// append an element to an array using push() method

const colors = ['red', 'blue', 'green'];
colors.push("sexy pink");
console.log(colors);
console.log(colors.length); 
console.log (colors.forEach((item, index) => {
    console.log(`${index}: ${item}`);
}));
console.log(colors.includes("sexy pink"));
console.log(colors.indexOf("sexy yellow") === -1);

// remove the last element from an array using pop() method

const jobs = ['developer', 'designer', 'manager'];
console.log(jobs.pop());
// removes the last element from the array and returns it, which is "manager" in this case. The array now only contains "developer" and "designer".
console.log(jobs.forEach((items, index) => {
    console.log(`${index}: ${items}`);
}));

// create new array using split method

const sentence = "Hello world this is JavaScript";
const sentenceArray = sentence.split(" ");
console.log(sentenceArray);

// difference between split and join is that split is used to convert a string into an array, while join is used to convert an array into a string. The split method takes a separator as an argument and splits the string into an array based on that separator, while the join method takes a separator as an argument and joins the elements of the array into a string using that separator.

// splice method is used to add or remove elements from an array at a specific index. It takes three arguments: the starting index, the number of elements to remove, and the elements to add (if any). For example, if we want to add "yellow" at index 1 in the colors array, we can use splice like this:

const food = ['pizza', 'burger', 'pasta'];

const remove = 2
// could use 2 directly instead of creating a variable for it, but I just wanted to show that you can use variables as arguments in the splice method

const removedFood = food.splice(remove, 1, "sushi");

console.log(food); // ["pizza", "burger", "sushi"]
console.log(removedFood); // ["pasta"]

// In this example, we start at index 2 (which is "pasta"), remove 1 element (which is "pasta"), and add "sushi" in its place. The resulting array is ["pizza", "burger", "sushi"], and the removed element is stored in the removedFood variable as ["pasta"].

// remove first element from an array using shift() method

const animals = ['cat', 'dog', 'rabbit'];
console.log(animals.shift());
// removes the first element from the array and returns it, which is "cat" in this case. The array now only contains "dog" and "rabbit".
console.log(animals.forEach((item, index) => {
    console.log(`${index}: ${item}`);
}));

// can use splice method to remove the first element from an array as well

const cars = ['Toyota', 'Honda', 'Ford'];
const start = 0;
const stop = 1;

const removedCar = cars.splice(start, stop);

console.log(cars); // ["Honda", "Ford"]
console.log(removedCar); // ["Toyota"]

const validation = "I have a big dick";
const validationArray = validation.split(" ");
console.log(validationArray);

// use unshift() method to add an element to the beginning of an array

const languages = ['JavaScript', 'Python', 'Java'];
const newLanguages = languages.unshift("C++");
console.log(languages); // ["C++", "JavaScript", "Python", "Java"]
console.log(newLanguages); // 4 (the new length of the array after adding "C++")
// newLanguages variable stores the new length of the array after adding "C++" to the beginning of the array. The unshift() method returns the new length of the array, which is 4 in this case, because we added one element to the original array of three elements.

// combining splice and indexOf to remove a specific element from an array

const provisions = ['bread', 'milk', 'eggs', 'cheese'];
const typeProvisions = provisions.indexOf("eggs");
const newProvisions = provisions.splice(typeProvisions, 1);
console.log(provisions); // ["bread", "milk", "cheese"]
console.log(newProvisions); // ["eggs"]

// In this example, we first use indexOf to find the index of the element "eggs" in the provisions array, which is 2. Then we use splice to remove that element from the array by starting at index 2 and removing 1 element. The resulting array is ["bread", "milk", "cheese"], and the removed element is stored in the newProvisions variable as ["eggs"].

// replace multiple elements in an array using splice method

const phones = ['iPhone', 'Samsung', 'Google Pixel', 'OnePlus'];
const startIndex = 1;
const deleteCount = 3;
const newPhones = phones.splice(startIndex, deleteCount, "Huawei", "Xiaomi");
console.log(phones); // ["iPhone", "Huawei", "Xiaomi"]
console.log(newPhones); // ["Samsung", "Google Pixel", "OnePlus"]   

// In this example, we start at index 1 (which is "Samsung"), remove 3 elements (which are "Samsung", "Google Pixel", and "OnePlus"), and add "Huawei" and "Xiaomi" in their place. The resulting array is ["iPhone", "Huawei", "Xiaomi"], and the removed elements are stored in the newPhones variable as ["Samsung", "Google Pixel", "OnePlus"].

// using for

for (const list of phones){
    console.log(list);
}

phones.forEach((item, index) =>{
    console.log(`${index}: ${item}`);
});

// combine two arrays using concat method

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]   

// copy an array using spread syntax, from() method, or slice() method

const originalArray = [1, 2, 3];

const copyOne = [...originalArray];
const copyTwo = Array.from(originalArray);
const copyThree = originalArray.slice();    

console.log(copyOne); // [1, 2, 3]
console.log(copyTwo);   // [1, 2, 3]
console.log(copyThree); // [1, 2, 3]

// the above create shallow copies of the original array, meaning that if the original array contains objects or other arrays, the copied arrays will reference the same objects or arrays. If we want to create a deep copy of an array, we can use JSON.parse() and JSON.stringify() methods like this:
const originalArrayTwo = [1, 2, 3, { name: "John" }, [4, 5]];
const deepCopy = JSON.parse(JSON.stringify(originalArrayTwo));
console.log(deepCopy); // [1, 2, 3, { name: "John" }, [4, 5]]

// In this example, we first convert the original array to a JSON string using JSON.stringify(), and then parse that string back into a new array using JSON.parse(). This creates a deep copy of the original array, meaning that any objects or arrays within the original array are also copied as new objects or arrays in the deepCopy array.

originalArrayTwo.splice(3, 1, { name: "Jane" });
console.log(originalArrayTwo); // [1, 2, 3, { name: "Jane" }, [4, 5]]
console.log(deepCopy); // [1, 2, 3, { name: "John" }, [4, 5]]

// In this example, we use splice to replace the object at index 3 in the originalArrayTwo with a new object { name: "Jane" }. The deepCopy array remains unchanged because it is a deep copy of the original array, meaning that it has its own separate copy of the objects and arrays within the original array.

const values = [];

for (let x = 0; x < 20; x++){
    values.push([x, x * 2, x * 2 ** 2]);
}
console.log(values);

console.table(values);

/* the above code creates a 2D array where each inner array contains the value of x, x multiplied by 2, and x multiplied by 2 raised to the power of 2. The console.table() method is used to display the values in a tabular format in the console, making it easier to read and understand the data. Each row of the table corresponds to an inner array, and each column corresponds to a specific value (x, x*2, x*2**2). This allows us to easily compare the values across different rows and columns. */


