//  Question 32: Checking Usernames
var currentUsers = ["sara", "Alminah", "Natasha", "Qasim-5", "Sara-3", "Mehreen"];
var newUsers = ["Alishba", "SARA", "Qasim-5", "Laiba", "sara-3", "Aqsa"];
newUsers.forEach(function (item) {
    if (currentUsers.some(function (currentUser) { return currentUser.toUpperCase() == item.toUpperCase(); })) {
        console.log(" Sorry, ".concat(item, " will need to enter a new username."));
    }
    else {
        console.log("".concat(item, " is available"));
    }
});
