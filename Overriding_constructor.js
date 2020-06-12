class Animal {

    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    // ...
}

class Rabbit extends Animal {
    constructor(name, ear_length) {
        super(name);
      //  super.speed;
       // console.log(super.speed);
        this.ear_length = ear_length;
    }
}
let rabbit = new Rabbit("White Rabbit", 10);
console.log(rabbit.name);
console.log(rabbit.ear_length);