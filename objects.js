const person = {
    name: "fortune",
    age: 27,
    sex: "female",
    /* allows us to group date together */
    greeting() {
        console.log("Hi " + this.name + ". " + "How old are you?")
    },
    reply: function() {
        console.log("I am " + this.age + ".")
    },
    /* do not use arror function for greeting or reply, else you will have undefined showing up for the values of name and age */
}

person.greeting();
person.reply();
