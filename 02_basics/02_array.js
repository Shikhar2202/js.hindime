const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros); // array merge nhi hote hai balki array ke andar ek aur array aa jata hai.
// console.log(marvel_heros); 
// console.log(marvel_heros[3][1]); // return flash.

// const all_heros = marvel_heros.concat(dc_heros); // merge two arrays and return new array.
// console.log(all_heros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // ... is spread operator which is used to merge two or more than two arrays.
// console.log(all_new_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_arr = another_arr.flat(3); // flat convert another_arr into single array where 3 is depth.

console.log(real_another_arr);


console.log(Array.isArray("Shikhar")); // returns false
console.log(Array.from("Shikhar")); // create array with s, h, i, k, h, a, r.
console.log(Array.from({name: "shikhar"})); // returns empty array. IMP

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // create array with given values in brackets.