new Promise((resolve, reject) => {
    resolve("ok");
}).then((result) => {
    blabla(); // no such function
}).catch(console.log); // ReferenceError: blabla is not defined

// the execution: catch -> then
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function (error) {
    console.log("The error is handled, continue normally");

}).then(
    () => console.log("Next successful handler runs")
);