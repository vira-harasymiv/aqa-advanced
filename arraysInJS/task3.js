function arraySum(arr){
    if (!Array.isArray(arr)){
    throw new Error("Вхідні дані повинні бути масивом");
}
for (let k of arr){
    if (typeof k !== "number"){
        throw new Error("Всі елементи масиву повинні бути числами");
    }       
}
    return arr.reduce((sum,current) => sum + current, 0);
}

console.log(arraySum([1, 2, 3, 4, 5]));