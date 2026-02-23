// Multiplication table for the number 6
const number = 6;
for (let i = 1; i <= 10; i++){
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`)
}

// Multiplication table for the number 7
const number2 = 7;
count = 1;
let result2 = number2;
while (count <= 10) {
    console.log(`${number2} x ${count} = ${result2}`);
    count++;
    result2 = number2 * count;
}