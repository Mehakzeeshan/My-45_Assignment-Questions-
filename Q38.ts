// Question 38: Cities

function describe_city(city: string, country: string = "United Kingdom") {
    console.log(`${city} is in ${country}.`);
}

describe_city("London");
describe_city("Paris", "France");
describe_city("Berlin", "Germany");