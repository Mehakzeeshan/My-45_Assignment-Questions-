// Question 45: Cars
function my_cars(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var cars = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return cars[key] = value;
    });
    return cars;
}
console.log(my_cars("Honda", "City", ["color", "black"], ["Sunroof", true]));
console.log(my_cars("Suzuki", "Alto", ["color", "white"], ["Year", 2022]));
