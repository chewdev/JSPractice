// Practice to show how hoisting works
sayHello(john); // 'hello undefined' output to the console
/* function declarations are hoisted and can be called before declaration*/
function sayHello(name) {
  console.log("hello " + name);
}

sayHello(john); // logs 'hello undefined' to the console
/* The declaration for the variable john is below this line and set equal to 'john'
However, due to hoisting, the variable declaration using the 'var' keyword is brought to the top and parsed prior to running the rest of the code. This is a step in memory allocation.
We see 'undefined' printed to the console because while the variable declaration is hoisted, the assignment to the variable is not. Thus, at this point, it is as if we declared: var john; on line 1. Due to hoisting, the statement below is as if we have: john = 'john'; without the var keyword declaration */

var john = "john";

sayHello(john); // logs 'hello john' to the console
/* At this point, john has been assigned the value of the string 'john' and will output that value to the console. */

// const and let declarations are not hoisted and will throw an exception if used before declaration;
let bob;
console.log(bob); // undefined, variable is declared but not assigned

//console.log(jack); // Uncaught ReferenceError: jack is not defined
//console.log(jill); // Uncaught ReferenceError: jill is not defined

// We can not use a variable declared with let or const before it has been declared
let jack = "jack";
const jill = "jill";
console.log(jack); // 'jack' output to console
console.log(jill); // 'jill' output to console

//sayBye(john); // sayBye is not a function
/* Function expressions are not hoisted in the same way as function declarations. They are hoisted in the same way as other variables declared with the var keyword. Thus, at this point, sayBye has been hoisted and declared and set equal to undefined. However, the function has not been assigned to it and undefined is not a function, so it cannot be called as such. */

var sayBye = function(name) {
  console.log("bye " + name);
};
