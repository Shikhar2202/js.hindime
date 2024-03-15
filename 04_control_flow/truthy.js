// const userEmail = "shikhar.ai"

// if (userEmail) {
//     console.log("got user email");
// } else {
//     console.log("don't have user email");
// }

// falsy values :- false, 0, -0, BigInt, 0n, "", null, undefined, NaN .
// remaining all truthy values.
// truthy values :- "0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object");
}


// Nullish Coalescing Operator (??) : null undefined

// let val1 ;
// val1 = 5 ?? 10; // 5

// val1 = null ?? 10; // 10

// val1 = undefined ?? 15; // undefined
// console.log(val1);

// val1 = null ?? 10 ?? 20; // 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`more than 80`);

