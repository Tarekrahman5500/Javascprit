let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
    // setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => console.log(result),
    error => console.log(error)
);

//promise.then(console.log);
// .catch(f) is the same as promise.then(null, f)
promise.catch(console.log)

    .finally(() => console.log("Promise ready"))
    .then(result => console.log(result)) // <-- .then handles the result
    .catch(err => console.log(err));

promise = new Promise(resolve => resolve("done!"));

promise.then(console.log); // done! (shows up right now)