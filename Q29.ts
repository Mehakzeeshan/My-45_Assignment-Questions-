// Question 29: Favorite Fuits

// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ["Grapes", "Orange", "Watermelon", "Guava", "Peach"];

// 1.
if(favorite_fruits.indexOf("Watermelon")) {
    console.log("You really like watermelon!")
};

// 2.
if(favorite_fruits.indexOf("Guava")) {
    console.log("You really like eating guavas!")
};

// 3.
if(favorite_fruits.indexOf("Peach")) {
    console.log("You really like eating peaches!")
};

// 4.
if(favorite_fruits.indexOf("Orange")) {
    console.log("You really like eating oranges!")
};

// 5.
if(favorite_fruits.indexOf("Grapes")) {
    console.log("You really like eating grapes!")
};