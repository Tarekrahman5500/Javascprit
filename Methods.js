let animal = {
    sayHi() {
        console.log('Animal');
    }
};

// rabbit inherits from animal
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi();
    }
};

let plant = {
    sayHi() {
        console.log("I'm a plant");
    }
};

// tree inherits from plant
let tree = {
    __proto__: plant,
    sayHi: rabbit.sayHi // (*)
};

tree.sayHi();  // I'm an animal (?!?)