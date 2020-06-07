let user = {
    name: "tarek",
    surname: "rahman",

    get Full_name() {
        return this.name +' '+ this.surname;
    },

    set Full_name(value) {
        [this.name, this.surname] = value.split(' ');
    }
};
console.log(user.Full_name);

user.Full_name = 'Sourov Sarker'

console.log(user.name);
console.log(user.surname);

for(let key in user) console.log(key);

Object.defineProperty(user, 'Full_name',{
    enumerable: false
});

for(let key in user) console.log(key);