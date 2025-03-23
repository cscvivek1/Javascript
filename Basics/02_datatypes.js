let name= "vivek"
let age=18
let isloggedin= false

//number =>2 to power 53
// bigint
//string =>" "
//boolean=> true or false
//null => standalone value
//undefine
//symbol --> uniques mostly used in react
// object

//console.log(typeof age);// number
//console.log(typeof null); //object (null is object ))

// JS is a dynamical type language because the type of variable is checked during runtime.

//Primitive datatypes(call by value) => string, number, boolean, null, undefined, symbol, bigint
// Non Primitive (reference) => Array, Objects, Functions

const score = 100 // typeof = number
const status = true // typeof = boolean

const students = ["vivek", "singh", "sisodia"] //array
{name= "vivek"
    age = 18
}           //object {}

const myFunction = function(){
    console.log("Hello World");
    console.log(name, age);
    console.log(typeof age); // number
    console.log(typeof myFunction); //object function
    
    
}
myFunction();