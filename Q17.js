// Question 17: Shrinking Guest List
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
console.log(guestsList);
console.log("Hello everyone,I have a great news! 'I have found a bigger dinnertable tonight");
// Add at beginning
guestsList.unshift("Kinza Hashmi");
// Add at middle
var middleGuest = "Sana Jawed";
var middleIndex = guestsList.length / 2;
guestsList.splice(middleIndex, 0, middleGuest);
// Add at end
guestsList.push("Saboor Ali");
guestsList.map(function (item) { return console.log("Dear ".concat(item, ", \"you are invited today for the dinner party.\"")); });
console.log("Hey everyone, I am feeling very sorry to tell you that unfortunately, I can invite only two people for dinner");
while (guestsList.length > 2) {
    var removedGuest = guestsList.pop();
    console.log("Dear ".concat(removedGuest, ", sorry I can't invite you to dinner."));
}
guestsList.forEach(function (item) {
    console.log("Dear ".concat(item, ", I want to tell you that you are still invited to the dinner."));
});
guestsList.splice(0, guestsList.length);
console.log(guestsList);
