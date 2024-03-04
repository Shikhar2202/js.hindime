// object using constructor

// const tinderUser = new Object() // singleton object
//or
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shikhar",
            lastname: "singh",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1, obj2);// merge two objects.

const obj3 = {...obj1, ...obj2} // this is best method to combine two objects.

// console.log(obj3);

// console.log(Object.keys(tinderUser)); // return keys in array.

// console.log(Object.values(tinderUser)); // return values in array.

// console.log(Object.entries(tinderUser)); 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




const course = {
    coursename: "js in hindi",
    price: "999",
    courseinstructor: "shikhar"
}

const {courseinstructor: instructor} = course
console.log(instructor);