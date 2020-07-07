function f(user) {
    console.log(`hi, ${user}`);
}

const getName = () => {
    return 'Jim';
};

const getLocation = () => {
    return 'Munich';
};

const dateOfBirth = '12.01.1982';

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;

exports.f= f;

