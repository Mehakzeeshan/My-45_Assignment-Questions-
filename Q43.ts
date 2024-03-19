// Question 43: Unchanged Magicians

// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magician_names = ["Alexander", "William", "Stepherd"];
function show_magicians(magician_names) {
 magician_names.forEach(function (item) {
     console.log(item);
    });
}

function make_great(magician_names: string[]): string[] {
    let greatMagicians = [];
    magician_names.forEach(item => {
        greatMagicians.push(`${item} the Great`)
    });
    return  greatMagicians;
}

let greatMagicians = make_great(magician_names.slice());
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("The Great:");
show_magicians(greatMagicians);