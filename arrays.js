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
