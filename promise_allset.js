const fetch = require('node-fetch');
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];
// If the browser doesn’t support Promise.allSettled, it’s easy to polyfill:
if (!Promise.allSettled) {
    Promise.allSettled = function (promises) {
        return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
            status: 'fulfilled',
            value
        }), reason => ({
            status: 'rejected',
            reason
        }))));
    };
} else {
    Promise.allSettled(urls.map(url => fetch(url)))
        .then(results => {
            results.forEach((result, num) => {
                if (result.status === 'fulfilled') {
                    console.log(`${urls[num]}: ${result.value.status}`);
                }
                if (result.status === "rejected") {
                    console.log(`${urls[num]}: ${result.reason}`);
                }
            });
        });
}