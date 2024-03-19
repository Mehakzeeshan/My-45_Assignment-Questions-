// Question 42: Great Magicians
var magician_names = ["Alexander", "William", "Stepherd"];
function show_magicians(magician_names) {
    magician_names.forEach(function (item) {
        console.log(item);
    });
}
// show_magicians(magician_names);
function make_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++)
        magician_names[i] = magician_names[i] + " The Great!";
}
make_great(magician_names);
show_magicians(magician_names);
