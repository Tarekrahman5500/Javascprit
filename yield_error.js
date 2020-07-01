function* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)

        console.log("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
        console.log(e); // shows the error
    }
}

let generator = gen();

let question = generator.next().value;
console.log(question);

generator.throw(new Error("The answer is not found in my database")); // (2)

function* generate() {
    let result = yield "2 + 2 = ?"; // Error in this line
}

 generator = generate();

question = generator.next().value;

try {
    generator.throw(new Error("The answer is not found in my database"));
} catch(e) {
    console.log(e); // shows the error
}