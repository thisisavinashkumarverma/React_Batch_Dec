var a = [23, 'raj'];
var data = [45, 'kumar'];
// var data:string[];
var userAges;
userAges = [23, 45, 67];
userAges.push(34);
userAges.push(78);
userAges.pop();
// find, map, filter, reduce, forEach, sort 
var isFeepaid;
isFeepaid = 1;
isFeepaid = true;
var accountNumbers = [123, 456, 789];
// accountNumbers.push(345); // Error: Cannot add to a readonly array
// accountNumbers.pop(); // Error: Cannot remove from a readonly array
userAges.forEach(function (item) {
    console.log(item);
});
// dimentional arrays
var twoDArray = [
    [23, 45, 67],
    [12, 34, 56],
    [78, 89, 90]
];
// Tuples -> It is a fixed length array, wwith specified data types for each index  
var address = [123, 'MG Road', 'Bangalore'];
console.log(typeof (address));
console.log(address.length);
