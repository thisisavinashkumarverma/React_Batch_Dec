// type | interface

// interface is a strcuture that defines the shape of an object
interface UserDetailsModel {
    name: string;
    age: number;
    isAdmin: boolean;
    address: string | {
        street: string;
        city: string;
        zip: string;
    };
    passportNumber?: string // optional property,
    displayDetails?(): number; // optional method
    houseno?: number; // optional property
}



interface UserDetailsModel {
    userCurrentLocation:string;
}

var userDetails1: UserDetailsModel = {
    name: 'Raj Kumar',
    isAdmin: true,
    age: 30,     
    address: "India",
    passportNumber: 'ADFASDF',
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, isAdmin: ${this.isAdmin}`);
        return 200;
    },
    userCurrentLocation: 'Bangalore'
}


var userDetails2: UserDetailsModel = {
    name: 'KRish Kumar',
    age: 25,
    isAdmin: true, 
    address: "India",
    houseno: 1234,
    userCurrentLocation: 'Chennai'

}

var bookDetails = {
    
}