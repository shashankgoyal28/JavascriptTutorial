// this is just to understand the example for a 
//Template Literal 

let obj = {
    item : "Pencil",
    price : 10, 
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

// otherwise Earlier what we used to do was 
console.log(" the cost of ", obj.item, "is ", obj.price, "Rupees" );


// Q.what are Template Literals in JavaScript ?
// A way to have embedded expressions in a strings 
// `this is an example of Template Literal`

// Q2.What is String Interpolation ?
// To Create Strings by doing Substitution of Placeholders 
// `String Expression ${expression} string Text` 