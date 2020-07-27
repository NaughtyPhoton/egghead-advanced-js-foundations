// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// Primitive Types
console.log(typeof 'Hello World') // string
console.log(typeof 42); // number
console.log(typeof false); // boolean
console.log(typeof 42n); // bigint
console.log(typeof Symbol()); // symbol
console.log(typeof null); // object
console.log(typeof undefined); // undefined

// mutating object
let myObj = {a: 1};

// IIFE That mutates given object
(function addTwo(obj) {
  obj.a += 2;
})(myObj);

console.log(myObj);

// Trying to mutate Primitive
let num = 1;

// IIFE That tries to mutates given number
(function addTwo(num) {
  num += 2;
  console.log(num); // changes within this scope
})(num);

console.log(num);

/**
 * Understanding Prototypal Inheritance
 */
const a = {};
console.log(a);

const b = Object.create(a);

a.cool = 'awesome';

console.log(b);

/**
 * Functions are first class objects
 */
function foo() {}

foo.firstName = 'bar';

console.dir(foo);
console.log(foo.prototype);
console.log(foo.toString());

/**
 * Block scopes
 */

var firstName = 'tyler';
{
  var firstName = 'clark';
  console.log(firstName);
}
console.log(firstName);

/**
 * Implicit binding on 'this' keyword
 */

const person = {
  firstName: 'Nathan',
  getName() {
    return `${this.firstName} is my first name.`
  }
}


