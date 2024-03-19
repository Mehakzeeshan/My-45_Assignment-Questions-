//  Question 32: Checking Usernames

let currentUsers: string[] = ["sara", "Alminah", "Natasha", "Qasim-5", "Sara-3", "Mehreen"];
let newUsers: string[] = ["Alishba", "SARA", "Qasim-5", "Laiba", "sara-3", "Aqsa"];

newUsers.forEach (item => {

    if (currentUsers.some(currentUser => currentUser.toUpperCase() == item.toUpperCase()))
    {
        console.log(` Sorry, ${item} will need to enter a new username.`)
    }
    else {
    console.log(`${item} is available`) }
})
