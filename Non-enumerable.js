let user = {
    name: "Tarek",
    toString() {
        return this.name;
    }
};
for (let userKey in user.valueOf()) {
    console.log(userKey);
}

Object.defineProperty(user, 'toString',{
    enumerable: false
});

for (let userKey in user.valueOf()) {
    console.log(userKey);
}

console.log(Object.keys(user)); // name