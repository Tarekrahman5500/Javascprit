const fetch = require('node-fetch');
async function f() {
   try {
       let r =  await fetch('http://no-such-url');
       let user = await r.json()
   } catch (e) {
       console.log(e);
   }
}

f();

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f1() {
    // shows 10 after 1 second
    wait().then(result => console.log(result));
}

f1();