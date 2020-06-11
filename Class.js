class user {
    constructor(name) {
        this.name = name;
    }

    SayHi() {
        console.log(this.name);
    }
}

let u = new user("Tarek");
u.SayHi();
console.log(typeof user);
// ...or, more precisely, the constructor method
console.log(user ===user.prototype.constructor)
// The methods are in User.prototype, e.g:
console.log(user.prototype.SayHi); // alert(this.name);
// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(user.prototype));

// 1. Create constructor function
function User(name) {
    this.name = name;
}
// 2. Add the method to prototype
User.prototype.SayHi = function () {
    console.log(this.name);

};
 let us = new User("Tarek");
us.SayHi();
console.log(user);