

function sayMyName (){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("R");
}

sayMyName()

// function addTwoNumbers (num1, num2){        
//     console.log(num1 + num2); 
// }
// const result = addTwoNumbers(3, 5);
// console.log(result); // undefined

function addTwoNumbers (num1, num2){        
    // let result = num1 + num2;
    // return result; 
    return num1 + num2;
}

const result = addTwoNumbers(3,5);
// console.log(`The result is ${result}`);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log(`please enter a username`);
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Shikhar"));// Shikhar just logged in.
// console.log(loginUserMessage("")); //   just logged in.
// console.log(loginUserMessage()); // undefined just logged in.


function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 600, 800, 900));//return array of prices.

// const user = {
//     username: "shikhar", 
//     price: 2000
// }

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    username: "shikhar", 
    price: 2000
})


const myNewArray = [200, 400, 100, 600]

function handle_Array(getArray){
    console.log(getArray[1]);
}

// handle_Array(myNewArray); // 400
handle_Array([200, 300, 500, 900]) // 300



