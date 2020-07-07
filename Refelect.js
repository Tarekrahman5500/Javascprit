let user = {
    name: "John",
};

user = new Proxy(user, {
    get(target, prop, receiver) {
        console.log(`GET ${prop}`);
        return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
        console.log(`SET ${prop} = ${val}`);
        return Reflect.set(target, prop, val, receiver); // (2)
    }
});

let name = user.name; // shows "GET name"
user.name = "Pete"; // shows "SET name=Pete"

 user = {
    _name: "Guest",
    get name() {
        return this._name;
    }
};

let userProxy = new Proxy(user, {
    get(target, prop, receiver) { // receiver = admin
        return Reflect.get(target, prop, receiver); // (*)
    }
});


let admin = {
    __proto__: userProxy,
    _name: "Admin"
};

console.log(admin.name); // Admin

let map = new Map();

let proxy = new Proxy(map, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
});

proxy.set('test', 1);
console.log(proxy.get('test')); // 1 (works!)

class User {
    #name = "Guest";

    getName() {
        return this.#name;
    }
}

 user = new User();

user = new Proxy(user, {
    get(target, prop, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
});

console.log(user.getName()); // Guest