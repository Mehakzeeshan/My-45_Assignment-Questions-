// Question 31: No Users
var userNames = ["Admin", "Elif", "David", "John", "Gabriel", "Tiffany"];
if (userNames.length === 0) {
    userNames.forEach(function (item) {
        if (item === "Admin") {
            console.log("Hello ".concat(item, ", would you like to see a status report?"));
        }
        else
            (console.log("Hello ".concat(item, ", Thankyou for logging in again.")));
    });
}
;
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else
    (userNames.forEach(function (item) {
        console.log("Hello ".concat(item, ", Thankyou for logging in again"));
    }));
