const players = ['Messi', 'Ronaldo', 'Neymar'];

const copiedplayers = players.slice();
console.log(copiedplayers); // ["Messi", "Ronaldo", "Neymar"]

const copiedPlayersWithSpread = [...players];
console.log(copiedPlayersWithSpread); // ["Messi", "Ronaldo", "Neymar"]
// used the spread operator to create a new array that contains all the elements of the original array. The spread operator is a convenient way to copy an array without modifying the original array. It creates a new array and spreads the elements of the original array into it. This is useful when you want to create a new array that is based on an existing array, but you don't want to modify the original array.


const toArray = (...args_) => {
    return args_;
}

console.log(toArray(1, 2, 3)); // [1, 2, 3]
// In this example, we define a function toArray that takes a variable number of arguments using the rest parameter syntax (...args_). The rest parameter collects all the arguments passed to the function into an array. When we call toArray(1, 2, 3), it returns an array containing the arguments [1, 2, 3]. This is a useful way to create a function that can accept any number of arguments and work with them as an array.