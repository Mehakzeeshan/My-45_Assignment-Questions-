// Question 45: Cars


function my_cars(manufacturer: string, model: string, ...options: [string, any][]): 
Object {
    let cars = {manufacturer,model};
    options.forEach(([key , value]) => cars[key] = value);
    return cars;
}

console.log(my_cars("Honda", "City", ["color","black"], ["Sunroof", true]));

console.log(my_cars("Suzuki", "Alto", ["color","white"], ["Year", 2022]));
