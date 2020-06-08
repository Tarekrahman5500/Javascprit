let animal = {
    eats: true,
    walk() {
        /* this method won't be used by rabbit */
        console.log("Can run");
    },
    Sleep() {
        if (!this.isSleeping) {
            console.log("sleeping time");
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    jump: true,
    __proto__: animal //*
};
// rabbit.__proto__ = animal // same with *
let longEar = {
    earLength: 10,
    __proto__: rabbit
};

let Dog = {

    __proto__: animal
};

rabbit.walk = function () {
    console.log("Can run faster");
}

console.log(rabbit.jump + ' ' + rabbit.eats + ' ' + animal.jump);

rabbit.walk();

console.log(longEar.jump + ' ' + longEar.eats);

longEar.walk();
rabbit.sleep();

console.log(rabbit.isSleeping + ' ' + animal.isSleeping);

rabbit.Sleep();
longEar.Sleep();
Dog.Sleep();

console.log(Object.keys(rabbit)) // // Object.keys only returns own keys
console.log(Object.keys(Dog));

//for..in loops over both own and inherited keys
for (let prop in rabbit) console.log(prop);
for (let prop in Dog) console.log(prop);

for (let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
        console.log('Our:' + prop); // Our: jumps
    } else {
        console.log('Inherited:' + prop); // Inherited: eats
    }
}