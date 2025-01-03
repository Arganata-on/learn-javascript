// variable = A container that store a value Behaves as if it were the value it contains.
// 1. declaration let x;
// 2. assignment x = 100;

let age = 21;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);

console.log(typeof age);

let fullName = "Arganata";
let favoriteFood = "Pizza";
let email = "arganata.on@gmail.com";

console.log(typeof fullName);
console.log(`Your name is ${fullName}`);
console.log(typeof favoriteFood);
console.log(`You like ${favoriteFood}`);
console.log(typeof email);
console.log(`Your email is ${email}`);

let online = true;
let forSale = false;
let isStudent = true;

console.log(typeof online);
console.log(`Arganata is online: ${online}`);
console.log(typeof forSale);
console.log(`Is this car for sale: ${forSale}`);
console.log(typeof isStudent);
console.log(`Enrolled: ${isStudent}`);

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
