// Print that a function is even
function handleEven(number){
        console.log("number is even");
}

//Print that a function is odd
function handleOdd(number){
        console.log("number is odd");
}

//Check the number
function handleNum(number, evenCallback, oddCallback){
    if (typeof number !== "number"){
        throw new Error("Input must be a number");
    }
    if (!Number.isInteger(number)){
        throw new Error("Input must be an integer");
    }
    if (number === 0){
        throw new Error("Number cannot be zero");
    }
    number %2 === 0 ? evenCallback(number) : oddCallback(number);
};

/**
 * Example usage:
 */
handleNum(4, handleEven, handleOdd); // Output: "number is even"
handleNum(7, handleEven, handleOdd); // Output: "number is odd"
handleNum(0, handleEven, handleOdd); // Throws an error: "Number cannot be zero"
handleNum(3.5, handleEven, handleOdd); // Throws an error: "Input must be an integer"
handleNum("5", handleEven, handleOdd); // Throws an error: "Input must be a number"