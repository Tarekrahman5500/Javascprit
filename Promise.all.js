const fetch = require('node-fetch');
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1),1000)),
    new Promise(resolve => setTimeout(() => resolve(2),2000)),
    new Promise(resolve => setTimeout(() => resolve(3),3000))
]).then(console.log)

let urls = [
    'https://api.github.com/users/tarek',
    'https://api.github.com/users/sourov',
    'https://api.github.com/users/jeresig'
];

// map every url to the promise of the fetch
let request = urls.map(url => fetch(url));
// Promise.all waits until all jobs are resolved

Promise.all(request)
.then(response => response.forEach(
    response => console.log(`${response.url}: ${response.status}`)
));

let names = ['iliakan', 'remy', 'jeresig'];
let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(response => {
        for (let Key of response) {
            console.log(`${Key.url}: ${Key.status}`);
        }
        return response;
        // map array of responses into an array of response.json() to read their content
    }).then(response => Promise.all(response.map(r => r.json())))
    // all JSON answers are parsed: "users" is the array of them
    .then(user => user.forEach(user => console.log(user.name)));

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(console.log);
