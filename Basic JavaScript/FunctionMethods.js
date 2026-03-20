
// For Each Loop in Arrays 
// arr.forEach(callbackFunctions)
// callbackFunctions : Here, it is a Function to Execute for Each Element in the Array.
// * A callback is a function passed as an argument to another Function here.
// whenever we associate a function with a Object it becomes a method 
// For Each Syntax 
// : arr.ForEach((val) => {
//   console.log(val);
//  })

// *IMPORTANT NOTE* : In JavaScript TheFunctions can be passed as Parameters/Argument.
// but as argument the name of the Function is passed.

//Example: 
let arr = ["Pune","Delhi","UP"];
arr.forEach((val, idx, arr) => {
console.log(val.toUpperCase(), idx, arr);
})

// Interview Question what are Higher Order Functions/ Methods
// -> which takes another functions as parameters or which returns functions
// eg; ForEach 

// MAP
// Creates a new array with the results of some operation.
//  The value its callback returns are used to form new array
// arr.map( callbackFnx value, index, array ))
// let newArr = arr.map( (val) =>{
// return val * 2;
// })
let nums = [22, 23, 24];
let newArray = nums.map((val) => {
    return val;
})
console.log(newArray);

// Some More Array Methods
// Filter
// Creates a new array of elements that give true for a condition/filter.
// Eg: all even elements
// let newArr = arr.filter( (val) =>{
// return val % 2 === O;
// 3)





// Reduce:
// Performs some operations & reduces the array to a single value. It returns that single value.
// JavaScript Demo: Array.reduce()
const array1 = [1,2,3,4];
// 0 + 1 + 2 + 3 + 4
const InitialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator,currentValue) => accumulator + currentValue, InitialValue,
);
console.log(sumWithInitial);
// Expected O/P: 10