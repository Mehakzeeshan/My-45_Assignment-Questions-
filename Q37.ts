// Question 37: Large Shirts

function make_shirts(size: string = "large", message: string = "I Love Typescript") {
    console.log(`Making a "${size}" size t-shirt with a message "${message}" printed on it.`);
}

make_shirts();    // default size and default message
make_shirts("medium");    // default message
make_shirts("small", "Power Of Coding");    // customized size and customized message