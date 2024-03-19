// Question 15: Changing Guest List
// Oiginal Guest List
var guestsList = ["Zara Abbas", "Sarah Khan", "Ayeza Khan"];
guestsList.map(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
// Could Not Attend
var unableToAttend = "Zara Abbas";
console.log("".concat(unableToAttend, " can't make it to dinner"));
// Replace The Guest
var newGuest = "Aiman Khan";
guestsList[guestsList.indexOf(unableToAttend)] = newGuest;
// New Invitation
guestsList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", Would you like to join me for dinner?"));
});
