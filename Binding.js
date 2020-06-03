let user = {
    firstName: "Tarek",
    sayHi() {
        console.log("Hi " + this.firstName);
    }
}
let funcuser = user.sayHi.bind(user);

//setTimeout(()=> user.sayHi(),2000);
funcuser();

/*setTimeout(function () {
    user.sayHi();
}, 1000);*/
setTimeout(funcuser, 1000);
user = {
    sayHi() {
        console.log("Another user in setTimeout!");
    }
};