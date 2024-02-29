// Primitive 

// 7 types : String, NUmber, Boolean, NULL, Undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345654656522024556656252222n // n convert it into bigInt.


// Reference (Non primitive)

// Array, Objeccts, Functions
const heros = ["shaktiman", "naagra", "doga"]; // arrays

let myObj = {
    name: "shikhar",   // object
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
}

let ab = myFunction;
console.log(ab);
console.log(typeof myFunction);