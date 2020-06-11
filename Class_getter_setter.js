class user {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(vale) {
        if (vale.length < 4) {
            console.log("sort");
            return;
        }
        this._name = vale;

    }
}

let user_ = new user("John");
console.log(user_.name)

user_ = new user(""); // Name is too short.

class User {

    ['say' + 'Hi']() {
        console.log("Hello");
    }
    name = 'uu0';

}

new User().sayHi();
console.log(new User().name)
// console.log(new User().property.name); // error