// Question 15: Changing Guest List

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
    console.log(`Dear ${guest}, Would you like to join me for dinner?`)
})
