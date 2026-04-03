

// function addValues(a1:number, a2:number):number {
//     var result:number;
//     result = a1 + a2;
//     return result;
// }

var addValues = (a1:number, a2:number):string =>{
    var result:number;
    result = a1 + a2;

    var username:string = 'Raj';
    return username;
}

var sum:string = addValues(20, 30);

console.log("The sum is " + sum);