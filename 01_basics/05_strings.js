const name = "shikhar";
const repoCount = 50;

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shikhar-ss')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(8));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);  // shik is output as 4th index char is not included.
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   shikhar   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shikhar.com/shikhar%20singh"

console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));