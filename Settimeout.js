function printnumbers(from, to) {
    let current = from;

     setTimeout(function go() {
        console.log(current);
        if (current< to) {
            setTimeout(go, 1000);
        }
        current = current + 1;
        },1000)
     }
printnumbers(5,10);

/*
function printNumbers(from, to) {
  let current = from;

  function go() {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }

  go();
  let timerId = setInterval(go, 1000);
}

printNumbers(5, 10);
 */