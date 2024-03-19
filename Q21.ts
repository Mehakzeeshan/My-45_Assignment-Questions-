// Question 21: Making Objects

let apartment: {Location: string; Area: number; Price: number;} = {
    Location: "Gulistan-e-Johar, Block 17, Karachi",
    Area: 1200,
    Price: 67039500
};

console.log(`The brand new and fully furnished apartment is now available at the prime location of ${apartment.Location} \n whose area is covered on ${apartment.Area} sq.ft \n and the apartment price is just Rs.${apartment.Price}`);