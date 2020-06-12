let animal = {
    name: "Animal",
    eat() {
        console.log(this.name+ ' eats');
    }
};

let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {
        // that's how super.eat() could presumably work
        //this.__proto__.eat.call(this); // (*)
        super.eat();
    }
};

rabbit.eat(); // Rabbit eats.

let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {
        // ...do something with long ears and call parent (rabbit) method
       // this.__proto__.eat.call(this); // (**)
        super.eat();// home object
    }
};

longEar.eat();  // Error: Maximum call stack size exceeded if(**) is call