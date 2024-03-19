// Question 30: Hello Admin

let userNames: string[] =["Admin", "Elif", "David", "John", "Gabriel", "Tiffany"]; 

userNames.forEach(item => {
    if (item === "Admin") {
        console.log(`Hello ${item}, would you like to see a status report?`);
 }

 else(
    console.log(`Hello ${item}, Thankyou for logging in again.`)
 ) 
});