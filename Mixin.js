let minx = {
    say_hi() {
        console.log('hi '+this.name);
    },

    say_bye() {
        console.log('bye '+this.name);
    }
}

class Class {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(Class.prototype, minx);

new Class("Sourov").say_bye();