const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500); 
    });
    return promise;
};


setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
        .then(text => {
            console.log(text);
            return fetchData();
        })
        .then(text2 => {
            console.log(text2);
        })
}, 2000);

// using text as a parameter in the callback function allows us to pass data from the fetchData function to the callback function, which can then be used to log the result of the fetchData function when it is done.

// the above code will run after 2000 milliseconds (2 seconds), but it may not run immediately after 2000 milliseconds due to the event loop and other tasks that may be running
// the above code is an example of asynchronous code, which means that it will not block the execution of other code while it is waiting for the timer to finish

console.log('Hello!');

// the above code will run immediately, and then the timer will run after 2000 milliseconds (2 seconds), but it may not run immediately after 2000 milliseconds due to the event loop and other tasks that may be running
// the above code is an example of synchronous code, which means that it will block the execution of other code until it is finished

// promises are a way to handle asynchronous code in a more elegant way, by allowing us to chain multiple asynchronous operations together and handle errors more easily