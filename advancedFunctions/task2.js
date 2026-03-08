function reduceNumber(num){
    if (typeof num !== "number"){throw new Error("Input must be a number");}
    if (!Number.isInteger(num)){throw new Error("Input must be an integer");}
    console.log(num);
    if (num <= 0){
        return;
    }else {
        return reduceNumber(num - 1);
    }
}

//example
reduceNumber(6);