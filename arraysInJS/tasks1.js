function arrayNumbers(arr){

if (!Array.isArray(arr)){
    throw new Error("Вхідні дані повинні бути масивом");
}
for (let k of arr){
    if (typeof k !== "number"){
        throw new Error("Всі елементи масиву повинні бути числами");
    }       
}

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for(let i of arr){
    if(i===0){
        zeroCount++;
    } else if (i > 0){
        positiveCount++;
    } else {
        negativeCount++;
    }       
}
console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);
}

arrayNumbers([1, -2, 3, 0, -5, 6]);