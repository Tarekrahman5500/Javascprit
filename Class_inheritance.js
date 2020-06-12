class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(this.name + ' run with speed of ' + this.speed);
    }

    stop() {
        this.speed = 0;
        console.log(this.name + ' still stand');
    }
}

class Rabbit extends Animal {
    hide() {
        console.log(this.name + ' is hide');
    }
    stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
    }
}

new Rabbit("White Rabbit").run(6);
new Rabbit("White Rabbit").hide();
new Rabbit("White Rabbit").stop();

function f(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

class User extends f("Hello") {
}

new User().sayHi(); // Hello

