// Question 16: More Guests

// Oiginal Guest List
let guestsList: string[] = ["Zara Abbas", "Sarah Khan", "Ayeza Khan"];

guestsList.map( guest => {
 console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

// Could Not Attend
let unableToAttend: string = "Zara Abbas";
console.log(`${unableToAttend} can't make it to dinner`);

// Replace The Guest
let newGuest: string = "Aiman Khan";
guestsList[guestsList.indexOf(unableToAttend)] = newGuest;

// New Invitation
guestsList.forEach(guest=>{
    console.log(`Dear ${guest}, Would you like to join me for dinner?`);
})
console.log(guestsList);

console.log("Hello everyone,I have a great news! 'I have found a bigger dinnertable tonight");

// Add at beginning
guestsList.unshift("Kinza Hashmi");


// Add at middle
let middleGuest = "Sana Jawed";
let middleIndex = guestsList.length/2;
guestsList.splice(middleIndex,0,middleGuest);


// Add at end
guestsList.push("Saboor Ali");


guestsList.map( item => console.log(`Dear ${item}, "you are invited today for the dinner party."`))