// Question 37: Large Shirts
function make_shirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("Making a \"".concat(size, "\" size t-shirt with a message \"").concat(message, "\" printed on it."));
}
make_shirts(); // default size and default message
make_shirts("medium"); // default message
make_shirts("small", "Power Of Coding"); // customized size and customized message
