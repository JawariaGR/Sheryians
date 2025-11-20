/* LEVEL 1 */

/*1. Write a function `sayHello()` that print `Hello JavaScript` */

function sayHello() {
  console.log("Hello JavaScript.");
}
sayHello();

/*2. Create a function add(a,b) that return their sum and log the result */

function add(a, b) {
  console.log(a + b);
}

add(45, 55);

/*3. Write a function with default parameter name = Guest that print `Hi <name>`   */

function defaultparameter(name = "Guest") {
  console.log(`Hi ${name}`);
}
defaultparameter("Mark");
defaultparameter();

/*4. Use rest parameter to make a function that adds unlimited number */

function restparameter(...parameter) {
  let sum = 0;

  for (let i = 0; i < parameter.length; i++) {
    sum += Number(parameter[i]);
  }
  return sum;
}
console.log(restparameter(2, 5, 4));
console.log(restparameter(2, 6, 8, 0, 5));

/*5. Create an IIFE (Immediately Invoked Function Expression) that print `i run instantly` */

(function () {
  console.log("I Run Instantly.");
})();

/*6. Make a nested function where the inner one print a variable from the outer one */

function nested() {
  let a = 43;
  (function () {
    console.log(a);
  })();
}
nested();

/*7. Create an array of 5 fruite. add one at the end and remove one from the the beginning */

let fruite = ["Kiwi", "Mango", "Apple", "Orange", "Banana"];
fruite.push("Grapes");
console.log(fruite);
fruite.shift();
console.log(fruite);

/*8. Use a For loop to print all elements of an array */

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let numbers of number) {
  console.log(numbers);
}

/*9.Create an object person with keys name age and city and print each key value */

let person = { name: "Abc", age: 12, city: "Def" };

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}

/*10. Use setTimeout() to log Time's up! after 2 seconds */

setTimeout(() => {
  console.log("Time's up !");
}, 2000);

/*LEVEL 2 */

/*1. Write a higher order function `runTwice(fn)` that takes another function and executes it two times   */

function runTwice(fn) {
  fn();
  fn();
  function fn() {
    console.log("Hello world");
  }
}
runTwice();

/*2. Create one pure function that always returns the same output for given input ,and one impure function using a global variable */

// PURE

function pure(a) {
  return a + 2;
}
console.log(pure(15));
console.log(pure(15));

// Impure Function

let b = 8;

function impure() {
  b++;
  return b;
}

console.log(impure());
console.log(impure());

/*3. Write a function that uses object destructuring inside parameter to extract and print name and age */

let info = {
  name: "Sky",
  age: 32,
};

function personInfo({ name, age }) {
  console.log(`NAME:- ${name}, AGE:- ${age}`);
}
personInfo(info);

/*4. Given an array of number ,use `map()`to create a new array where each number is squared */

let numbers = [2, 4, 6, 8, 10, 12];
let squared = numbers.map((numbers) => numbers * numbers);
console.log(squared);

/*5. Use `reduce()` to find the total salary from an array of number `[1000,2000,3000]` */

let salary = [1000, 2000, 3000];
let sumsalary = salary.reduce((a, b) => a + b, 0);
console.log(sumsalary);


/*6. Use `filter() to get only even number from an array` */

let allnumber = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let even = allnumber.filter(number => (number % 2 === 0) )
console.log(even)


/*7. Create an array of names and use `some()` and `every()` to test a condition(e.g all name longer then 3 char) */

let names = ["Pond", "Mark", "Sky", "Zain", "Ebad"];
let somelenght = names.some((n) => n.length > 3);
console.log(somelenght);
let everylenght = names.every((n) => n.length > 3);
console.log(everylenght);

/*8. Create an object `user `and test the behavior of Object.freeze() and Object.seal() by adding/changing keys */

let user = {
  names: "Sky",
  password: "1234",
};
// seal() = can change values but cannot add/remove properties

Object.seal(user);
user.password = "4321";
user.email = "Sky@gamil.com"
console.log(user);

let user1 = {
  names: "mark",
  password: "5678",
};

// Object.freeze() makes an object completely immutable. Cannot change anything

Object.freeze(user1);
user1.names = "abc";
user1.email = "mark@gamil.com"
console.log(user1);

/*9. Create a anested object `(user -> address -> city)` and access the city name inside it */


let obj = {
  user: { address: { city: "New York" } },
};

console.log(obj.user.address.city)
