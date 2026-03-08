function divide(numerator, denominator) {
    try{
        if (denominator === 0){
            throw new Error("Denominator cannot be zero");
        }
        if (typeof numerator !== "number" || typeof denominator !== "number"){
            throw new Error("Both numerator and denominator must be numbers");
        }
        console.log(numerator / denominator);
    } catch (error) {
        console.error("Error: ", error.message);
    } finally {
        console.log("Робота завершена");
    }
    }

// Examples:
divide(10, 5); // Output: 2
divide(10, 0); // Output: Error: Denominator cannot be zero
divide(10, "a"); // Output: Error: Both numerator and denominator must be numbers
divide("a", 5); // Output: Error: Both numerator and denominator must be numbers