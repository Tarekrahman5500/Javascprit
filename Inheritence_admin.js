let user = {
    name: "tarek",
    surname: "rahman",

    get Full_name() {
        return this.name + ' ' + this.surname;
    },

    set Full_name(value) {
        [this.name, this.surname] = value.split(' ');
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.__proto__)
console.log(admin.Full_name);

admin.Full_name = 'Sourov Sarker';
console.log(admin.Full_name);