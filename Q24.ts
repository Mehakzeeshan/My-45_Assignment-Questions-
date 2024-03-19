// Question 24: More Conditional Tests

// Tests for equality and inequality with strings
let vegetable = 'Potato';
let vegetables = 'Carrot';
console.log("Tests for equality and inequality with strings");
console .log(vegetable == vegetable);
console .log(vegetable == vegetables);

// Tests using the lower case function
let fruit = "banana";
let fruits = "Banana";
console.log("Tests using the lower case function");
console.log(fruits.toLowerCase() == fruit);
console.log(fruit.toLowerCase() == fruits);

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let a: number = 7;
let b: number = 5;
let c: number = 7;

console.log("Numerical tests involving equality");
console.log(a == b);
console.log(a == c);

console.log("Numerical tests involving inequality");
console.log(a !== b);
console.log(a !== c);

console.log("Numerical tests involving greater than");
console.log(a > b);
console.log(b > a);

console.log("Numerical tests involving less than");
console.log(a < b);
console.log(b < a);

console.log("Numerical tests involving greater than or equal to");
console.log(a >= b);
console.log(a >= c);
console.log(b >= a);

console.log("Numerical tests involving less than or equal to");
console.log(a <= b);
console.log(a <= c);
console.log(b <= a);

// Tests using "and" and "or" operators
console.log("Tests using 'and' operators");
console.log(fruit == fruits && vegetable == vegetables);
console.log(fruit == fruit && vegetable == vegetable);

console.log("Tests using 'or' operators");
console.log(fruit == fruits || vegetable == vegetables);
console.log(fruit == fruit || vegetable == vegetables);

// Test whether an item is in a array
console.log("Test whether an item is in a array");
let utensils = ["knife", "folk", "wok", "bowl"];
console.log('Is "bowl" in utensils?');
console.log(utensils.indexOf("bowl")  !== -1);
console.log('Is "cups" in utensils?');
console.log(utensils.indexOf("cups") !== -1);

// Test whether an item is not in a array
console.log("Test whether an item is not in a array");
console.log('Is "cups" not in utensils?');
console.log(!utensils.indexOf("cups") );
console.log('Is "bowl" not in utensils?');
console.log(!utensils.indexOf("bowl") );







