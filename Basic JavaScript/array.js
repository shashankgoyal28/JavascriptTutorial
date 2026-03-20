// Arrays in Javascript = Collection of Items 
// this Code is used to Find the Average of the Elements Present in the Array 
let arr = [85,97,44,37,76,60]

let sum = 0;
let x = arr.length;
for(let i = 0; i< arr.length ; i++)
{
    sum = sum + arr[i];
}
console.log(sum/x); 

// Alternative Approach 

let arr1 = [85,97,44,37,76,60]

let sum1 = 0;
for(let val of arr1)
{
    sum += val;
}
let avg = sum / arr.length;
console.log(`avg marks of the class = ${avg}`);

// Qs. For a given array with prices of 5 items - [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.
let array1 = [250, 645, 300, 900, 50]
let n = array1.length;
let Temp = 0

for(let i = 0 ;i < n;i++)
{
    Temp = array1[i] * 0.1;
    array1[i] = array1[i] - Temp; 
}
console.log(array1);
