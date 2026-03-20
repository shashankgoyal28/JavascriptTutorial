// these Below are some of the Array Methods, 
// Push(): add to end, 
// toString(): Converts Array to String,
// Pop(): Delete From end and Return, 
// Concat: Joins Multiple arrays & Returns Result
// Unshift: add to Start 
// Shift: Delete From start and Return
// Slice(): returns a peice of the Array 
// slice-> slice(startIdx, endIdx)

// Splice(): Change Original Array(add, Remove, Replace)
// splice(StartIdx, delCount, newE1..)

// Qs. Create an array to store companies - "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove Uber & Add Ola in its place
// c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

companies.shift()
companies.splice(2,1, 'ola')
companies.push()

