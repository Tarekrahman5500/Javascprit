/*one = function () {
  console.log(1);
}*/
const User = require('./module.exports');

const trk = new User('tarek', 22, 'trk@example.com');
console.log(trk.getUserStats());

console.log(User.getName()+' was bron '+User.dob)