// Sample function 


// Syntax:
//     function funname(parameter1: type1, parameter2: type2): returnType {
//     }


function displayUserInfo(name: string, age: number): number {
    console.log(`User Name: ${name}, Age: ${age}`);
    return age;
}


function displayAddress(dno:number = 230, streenname:string, pincode:string, nearby?:string): void {
    console.log(`User Name: ${name}, Age: ${age}`);
}

var  displayAddress2 = (dno:number = 230, streenname:string, pincode:string, nearby?:string): void => {
    console.log(`User Name: ${name}, Age: ${age}`);
}