// Practice to show how closures work

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000); // after 1 second, log i to the console
}
/* The above code will log, 5 to the console five times. This is because the setTimeout callback references an outer scoped variable. The timeout callback is put onto the event loop and can not be ran until the call stack (the entire loop) has been run through and 1 second has passed. Thus, by the time the callback to log i to the console runs, i has been incremented to 5 and exited the loop. So when it logs i to the console, i is equal to 5 and 5 is printed out for each iteration of the loop.
 */

for (var j = 0; j < 5; j++) {
  (function(jCopy) {
    setTimeout(function() {
      console.log(jCopy);
    }, 1000);
  })(j);
}
/* This time, the above code will in fact log 0 -> 1 -> 2 -> 3 -> 4 to the console. This is because the setTimeout no longer references the outer scoped j variable that is incremented within the loop. It references a 'copy' of that variable at the time at which the setTimeout is put on the event loop. This copy, the jCopy parameter, is a closure within the IIFE (Immediately Invoke Function Expression) The setTimeout callback now references this closure and logs that value to the console.*/

// There is a simple way to avoid the need for a closure/IIFE in this instance
for (let k = 0; k < 5; k++) {
  setTimeout(function() {
    console.log(k);
  }, 1000);
}
// This logs 0, 1, 2, 3, 4 to the console as well due to how variables declared with let are scoped

function sumFuncCreator(a) {
  return function(b) {
    return a + b;
  }; // The parameter 'a' becomes a closure within the return function
  // functions declared within another function can reference the outer functions variables
}

const add2 = sumFuncCreator(2);
console.log(add2(3)); // 5

const add10 = sumFuncCreator(10);
console.log(add10(20)); // 30
