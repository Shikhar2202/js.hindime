// Array initialization

const myArray = [0, 1, 2, 3, 4, 5]
// const myHeros = ["shaktiman", "batman"]
// const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArray[0]);


// Array methods

// myArray.push(6) // push value at last index.
// console.log(myArray);

// myArray.pop() // pop value at last index.
// console.log(myArray);

// myArray.unshift(9); // insert 9 at the starting of array.
// console.log(myArray);

// myArray.shift() // delete element at the starting index.
// console.log(myArray);

// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(9)); // -1

const newArr = myArray.join() // convert the array into string.
// console.log(myArray);
// console.log(typeof newArr);
// console.log(newArr);

// Slice, Splice :-

console.log("A", myArray);

const myn1 = myArray.slice(1, 3); // returns [1, 2] 
console.log(myn1);

const myn2 = myArray.splice(1, 3); // returns [1, 2, 3] and it manipulates original array.
console.log(myArray); // returns [0, 4, 5]
console.log(myn2);
