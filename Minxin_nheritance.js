let minx = {
    say_hi(phrase) {
        console.log(phrase);
    }
}

let minx2 = {
    __proto__: minx,
    hi() {
        super.say_hi("hi "+this.name);
    },

    bye() {
        super.say_hi("bye "+this.name);
    }
}

class Class {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Class.prototype, minx2);

new Class("Sourov").bye();

