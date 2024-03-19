// Question 38: Cities
function describe_city(city, country) {
    if (country === void 0) { country = "United Kingdom"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("London");
describe_city("Paris", "France");
describe_city("Berlin", "Germany");
