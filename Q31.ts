// Question 31: No Users

let userNames: string[] =["Admin", "Elif", "David", "John", "Gabriel", "Tiffany"]; 
if(userNames.length === 0) {

userNames.forEach(item => {
    if (item === "Admin") {
        console.log(`Hello ${item}, would you like to see a status report?`);
 }

 else(
    console.log(`Hello ${item}, Thankyou for logging in again.`)
 ) 
})
};

userNames = [];
if(userNames.length === 0) {
    console.log("We need to find some users!");
}
else (userNames.forEach (item => {console.log(`Hello ${item}, Thankyou for logging in again`)
})
);