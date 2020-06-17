class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: "+property);
        this.name = "PropertyRequiredError";
        this.property = property;

    }
}

function test() {
    throw new ValidationError('Whoops!');
}

try {
    test();
} catch (e) {
    console.log(e.message);
    console.log(e.name);
    //  console.log(e.stack)
}

function read_user(json) {
    let user = JSON.parse(json);
    if (!user.age) {
       // throw new ValidationError("No field: age")
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
       // throw new ValidationError("No field: name");
        throw new PropertyRequiredError("name");
    }

    return user;
}

try {
    let user = read_user('{"age": 22 }');
} catch (e) {
    if (e instanceof ValidationError) {
        console.log("Invalid data: " + e.message);// // Invalid data: No property: name
        console.log( e.property);
        console.log(e.name);
    } else if (e instanceof SyntaxError) {
        console.log("json syntax error: " + e.message);
    } else {
        throw  e;
    }
}

class my_error extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.message;
    }
}

class ValidationError2 extends my_error { }

class PropertyRequiredError2 extends ValidationError2 {
    constructor(property) {
        super("No property: " + property);
        this.name = "PropertyRequiredError";
        this.property = property;
    }
}

console.log(( new PropertyRequiredError2("field").name ));