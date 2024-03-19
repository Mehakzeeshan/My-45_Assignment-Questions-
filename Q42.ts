// Question 42: Great Magicians

let magician_names: string[] = ["Alexander", "William", "Stepherd"];
function show_magicians(magician_names: string[]) {
    magician_names.forEach(item => {
        console.log(item);
    } )
}
show_magicians(magician_names);

function make_great(magician_names: string[]) {
    for(let i=0; i < magician_names.length; i++)
    magician_names[i] = magician_names[i] + " The Great!"
}
 make_great(magician_names);
 show_magicians(magician_names);