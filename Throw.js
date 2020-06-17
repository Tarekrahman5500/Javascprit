function readData() {
    try {
        JSON.parse("{ bad json o_O }");
    } catch (e) {
        console.log(e.name); // SyntaxError
        console.log(e.message); // Unexpected token b in JSON at position 2
    }

    let json = '{ "age": 30 }'; // incomplete data

    try {

        let user = JSON.parse(json); // <-- no errors

        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name"); // (*)
        }
        blabla(); // unexpected error
        console.log(user.age);

    } catch (e) {
        console.log("JSON Error: " + e.message); // JSON Error: Incomplete data: no name
        if (e instanceof SyntaxError) {
            console.log("JSON Error: " + e.message);
            throw  e; // // rethrow (don't know how to deal with it)
        } else {
            throw  e;
        }
    }
}
try {
    readData();
} catch (e) {
    console.log( "External catch got: " + e ); // caught it!
}