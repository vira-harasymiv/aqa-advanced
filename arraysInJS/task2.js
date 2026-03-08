function arrayWithMutation(arr){
if (!Array.isArray(arr)){
    throw new Error("Вхідні дані повинні бути масивом");
}
for (let k of arr){
    if (typeof k !== "number"){
        throw new Error("Всі елементи масиву повинні бути числами");
    }       
}

return arr.map((n, index) => n * index);

}

console.log(arrayWithMutation([1, 2, 3, 4, 5]));