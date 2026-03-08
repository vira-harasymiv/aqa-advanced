function concatArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error("Вхідні дані повинні бути масивами");
    }   
    for (let k of arr1) {
        if (typeof k !== "number") {
            throw new Error("Всі елементи першого масиву повинні бути числами");
        }
    }
    for (let k of arr2) {
        if (typeof k !== "number") {
            throw new Error("Всі елементи другого масиву повинні бути числами");
        }
    }

    return arr1.concat(arr2);
}

console.log(concatArrays([1, 2, 3], [4, 5, 6]));