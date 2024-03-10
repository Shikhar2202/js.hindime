const user = {
    username : "shikhar",
    price : 999 ,
    
    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "rohit"
// user.welcomeMessage();

// console.log(this); // empty object.


// function chai(){
//     let username = "shikhar"
//     console.log(this.username); // undefined. 
// }

// chai();

// const chai = function (){
//     let username = "shikhar"
//     console.log(this.username);
// }

const chai = () => {           // arrow function.
    let username = "shikhar"
    console.log(this.username);
}

// chai ();

// const addTwo = (num1, num2) => {
//     return num1 + num2  // explicit return.
// }

// const addTwo = (num1, num2) => num1 + num2; // implicit return.
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username : "shikhar"})

console.log(addTwo(3, 4));