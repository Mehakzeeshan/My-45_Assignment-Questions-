// Question 3: Name Cases; Lower Case, Upper Case, Title Case 
var personName = "Zeeshan Anis";
// lower case
console.log("Lower case =" + personName.toLowerCase());
// upper case
console.log("Upper case =" + personName.toUpperCase());
// title case
console.log("Title case =" + personName.charAt(0).toUpperCase() + personName.slice(1, 7).toLowerCase(), personName.charAt(8).toUpperCase() + personName.slice(9, 12).toLowerCase());
