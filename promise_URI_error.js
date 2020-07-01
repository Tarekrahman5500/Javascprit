const Window = require('window');

const window = new Window();
new Promise((resolve, reject) => {

    throw new Error("Whoops!");

}).catch(function(error) {
    if (error instanceof URIError) {

    } else {
        console.log("it can't be handle");
        throw  error;
    }
}).then(function () {

}).catch(error => {
    console.log(`The unknown error has occurred: ${error}`);
})

window.addEventListener('unhandledrejection', function(event) {
    // the event object has two special properties:
    console.log(event.promise); // [object Promise] - the promise that generated the error
    console.log(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
    throw new Error("Whoops!");
}); // no catch to handle the error

new Promise(function(resolve, reject) {
    setTimeout(() => {
        reject(new Error("Whoops!"))
    }, 1000);
}).catch(console.log);