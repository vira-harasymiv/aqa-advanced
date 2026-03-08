function sortArray(arr) {
    const sortedArr = [...arr];
    sortedArr.sort((a, b) => a - b);
    console.log(arr);
    console.log(sortedArr);
}

const numbersList = [1,10,14,2,4,5,43,34];
sortArray(numbersList);