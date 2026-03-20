// this file is the Example Explaining the For of and For in Loops in java script 
// the For OF Loop is generally used in strings and array in javascript 
// example of For OF
let str = "JavaScript";
let size = 0;
for(let i of str)
{
    console.log("i = ", i);
    size++
}
console.log("string size = ", size);

// For in Loop is Specifically used for Objects 
// the below is an example of For in Loop 

let student = {
    Name: "Shashank Goyal",
    age: 23,
    CGPA: 8.61,
    isPass: True,
};
for(let key in student)
{
    console.log(key);
}
