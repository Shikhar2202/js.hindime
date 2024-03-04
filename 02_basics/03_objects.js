// singleton

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "Shikhar",
    "full name": "Shikhar Singh",
    [mySym]: "myKey1" ,// to refer symbol always use square braces.
    age: 18,
    location: "kanpur",
    email: "shikhar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "shikhar@gmail.com"
// Object.freeze(jsuser)
jsuser.email = "shikhar@chatgpt.com"
// console.log(jsuser.email);
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello JS user");
}

jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

// always use dot to access objects.


