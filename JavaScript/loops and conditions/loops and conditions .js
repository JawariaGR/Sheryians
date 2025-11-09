/*
Ask user's age and check if eligible to vote if age age >= 18 "Eligible" else "Not Eligible"
 */

let userage = Number(prompt("Enter Youe Age:- "));
if (userage >= 18) {
  console.log("Your Eligible To Vote");
} else {
  console.log("Not Eligible");
}

/*print Mulitiplication table of 12 
use Loop to print table 1 to 10 */

for (let i = 1; i < 11; i++) {
  let num = 12;
  console.log(`${num} * ${i} = ${num * i}`);
}

/*Ask User for password 
Allow only 3 Attempts to enter correct password if user gets its right then easily stop.
 if not then account hacked */

const password = "abc123";

let success = false;

for (let attempt = 0; attempt < 3; attempt++) {
  let userpassword = prompt("Enter Your password");
  if (userpassword == password) {
    success = true;
    break;
  }
}

if (success) {
  console.log("Successfull Login");
} else {
  console.log("Account Locked");
}

/*
Ask user for words until they type “stop”. Count how many times they typed “yes”
Loop until "stop" is typed. Count "yes".
*/

let word = prompt("Enter Your Word");
let yesCount = 0;

while (word !== "stop") {
  if (word === "yes") {
    yesCount++;
  }
  word = prompt("Enter Your Word");
}

console.log(`Yes Appere ${yesCount} times`);

/* Print numbers divisible by 7 from 1 to 50
Use modulo % and loop. */

for (let i = 1; i < 51; i++) {
  if (i % 7 === 0) {
    console.log(i);
  }
}

/*Sum of all odd numbers from 1 to 30
Add only odd numbers. Print final sum. */

let sum = 0;
for (let i = 1; i < 31; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}
console.log(`Sum Of All Odd Number Between 1 to 30:- ${sum}`);

/*  Keep asking number until user enters an even number
Use while loop. Stop only if input is even. */

let num = Number(prompt("Enter The Number:- "));

while (num !== 0) {
  if (num % 2 === 0) {
    console.log(`Number is even ${num}`);
    break;
  }
  num = Number(prompt("Enter The Number:- "));
}

/*Print numbers between two user inputs
Input start and end using prompt() → print all between. 


Print only first 3 odd numbers from 1 to 20
Use loop. Stop with break after 3 odd prints.

Ask user 5 numbers. Count how many are positive
Use loop + condition + counter.

ATM Simulator – Allow 3 withdrawals
Start with ₹1000 balance. Ask withdrawal amount 3 times.
If enough balance → deduct
Else → print “Insufficient balance”
*/
