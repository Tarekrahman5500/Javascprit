class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getUserStats() {
        return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `;
    }
}
module.exports = {
    getName: () => {
        return 'sourov'
    },
    getLocation: () => {
        return 'Gaibandha'
    },
    dob: '12.01.1997'
};

module.exports = User;

console.log(module);