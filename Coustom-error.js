class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

class ValidationError extends Error { /*...*/
}

class PropertyRequiredError extends ValidationError { /* ... */
}

function validateUser(user) {
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

function readUser(json) {
    let user;
    try {
        user = JSON.parse(json);
    } catch (e) {
        if (e instanceof SyntaxError) {
            throw new ReadError("Syntax Error", e);
        } else {
            throw e;
        }
    }

    try {
        validateUser(user);
    } catch (e) {
        if (e instanceof  ValidationError ) {
            throw new ReadError("Validation Error", e);
        } else {
            throw e;
        }
    }
}

try {
    readUser('{bad json }');
} catch (e) {
    if (e instanceof ReadError) {
        console.log(e);
        // Original error: SyntaxError: Unexpected token b in JSON at position 1
        console.log("Original error: " + e.cause);
    } else {
        throw e;
    }
}

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let err = new FormatError("formatting error");

console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof SyntaxError ); // true