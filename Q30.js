// Question 30: Hello Admin
var userNames = ["Admin", "Elif", "David", "John", "Gabriel", "Tiffany"];
userNames.forEach(function (item) {
    if (item === "Admin") {
        console.log("Hello ".concat(item, ", would you like to see a status report?"));
    }
    else
        (console.log("Hello ".concat(item, ", Thankyou for logging in again.")));
});
