function getEvenNumbers(arr) {
    if (!Array.isArray(arr)){
    throw new Error("Вхідні дані повинні бути масивом");
}
for (let k of arr){
    if (typeof k !== "number"){
        throw new Error("Всі елементи масиву повинні бути числами");
    }       
}
return arr.filter(num => num % 2 === 0);
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));