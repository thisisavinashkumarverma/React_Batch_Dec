
import sample, { userData, accountBalance,  } from './userProfile.js';

function displayCustomerDetails() {
    console.log("Customer Account Details:");
    console.log("Account name " + userData.name);
    console.log("Age " + userData.age);
    console.log("Email " + userData.email);

    console.log("Account balance " + accountBalance);
}

displayCustomerDetails();

sample();