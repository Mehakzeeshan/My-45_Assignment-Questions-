// Question 33: Ordinal Numbers
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(function (item) {
    var suffix = "th";
    if (item === 1) {
        suffix = "st";
    }
    else if (item === 2) {
        suffix = "nd";
    }
    else if (item === 3) {
        suffix = "rd";
    }
    {
        console.log("".concat(item).concat(suffix));
    }
});
