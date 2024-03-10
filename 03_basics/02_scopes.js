// let a = 100
// const b = 200
// var c = 300

// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
// }

// console.log(a);
// console.log(b);
// console.log(c); // var is not good.

// function one(){
//     const username = "shikhar"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two();
// }

// one();

if (true) {
    const username = "shikhar";

    if(username === "shikhar"){
        const website = "youtube"
        // console.log(username + " " + website);
    }
    // console.log(website);

}

// console.log(username);

// ************************ INTERESTING *************************

console.log(addone(5));
function addone (num){
    return num + 1;    // functon addOne can be access before initialization.
}



const addTwo = function(num){
    return num + 2;           // function addTwo cannot be access before initialization.
}

console.log(addTwo(5));

