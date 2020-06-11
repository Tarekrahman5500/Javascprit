function myClass(phrase) {
    // declare a class and return it
    return class {
        sayHi(){
            console.log(phrase);
        };
    };
}
let user =  myClass("ho");
 new user().sayHi();