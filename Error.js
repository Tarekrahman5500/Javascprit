try {
    setTimeout(function() {
     //   noSuchVariable; // script will die here
    }, 1000);
} catch (e) {
    console.log( "won't work" );
}

setTimeout(function() {
    try {
        noSuchVariable; // try..catch handles the error!
    } catch {
        console.log( "error is caught here!" );
    }
}, 1000);

try {
    lalala; // error, variable is not defined!
} catch(err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
}

    // Can also show an error as a whole
    // The error is converted to string as "name: message"
