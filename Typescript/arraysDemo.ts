var a = [23, 'raj'];

var data: (number | string)[] = [45, 'kumar'];
// var data:string[];
var userAges:number[];
userAges = [23,45,67];
userAges.push(34);
userAges.push(78);
userAges.pop();
// find, map, filter, reduce, forEach, sort 


var isFeepaid:number|boolean;
isFeepaid = 1;
isFeepaid = true;

var accountNumbers: readonly number[] = [123, 456, 789];
// accountNumbers.push(345); // Error: Cannot add to a readonly array
// accountNumbers.pop(); // Error: Cannot remove from a readonly array

userAges.forEach((item) => {
        console.log(item);
})

// dimentional arrays
var twoDArray: number[][] = [
    [23,45,67],
    [12,34,56],
    [78,89,90]
];

// Tuples -> It is a fixed length array, wwith specified data types for each index  

let address: [number, string, string] = [123, 'MG Road', 'Bangalore'];

console.log(typeof(address));

console.log(address.length)
