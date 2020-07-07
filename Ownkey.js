let user = {
    name: "John",
    age: 30,
    _password: "***"
};

user = new Proxy(user, {
    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "ownKeys" filters out _password
for(let key in user) console.log(key); // name, then: age

// same effect on these methods:
console.log( Object.keys(user) ); // name,age
console.log( Object.values(user) ); // John,30

ser = { };

user = new Proxy(user, {
    ownKeys(target) {
        return ['a', 'b', 'c'];
    }
});

console.log( Object.keys(user) ); // <empty>

user = { };

user = new Proxy(user, {
    ownKeys(target) { // called once to get a list of properties
        return ['a', 'b', 'c'];
    },

    getOwnPropertyDescriptor(target, prop) { // called for every property
        return {
            enumerable: true,
            configurable: true
            /* ...other flags, probable "value:..." */
        };
    }

});

console.log( Object.keys(user) ); // a, b, c

user = {
    name: "John",
    _password: "***"
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*)
    },
    set(target, prop, val) { // to intercept property writing
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target, prop) { // to intercept property deletion
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) { // to intercept property list
        return Object.keys(target).filter(key => !key.startsWith('_'));
    }
});

// "get" doesn't allow to read _password
try {
    console.log(user._password); // Error: Access denied
} catch(e) { console.log(e.message); }

// "set" doesn't allow to write _password
try {
    user._password = "test"; // Error: Access denied
} catch(e) { console.log(e.message); }

// "deleteProperty" doesn't allow to delete _password
try {
    delete user._password; // Error: Access denied
} catch(e) { console.log(e.message); }

// "ownKeys" filters out _password
for(let key in user) console.log(key); // name

let range = {
    start: 1,
    end: 10
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.start && prop <= target.end;
    }
});

console.log(5 in range); // true
console.log(50 in range); // false

function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        }
    });
}

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target

sayHi("John"); // Hello, John! (after 3 seconds)