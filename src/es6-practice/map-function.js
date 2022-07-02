let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];

let result = numbers.map(function (currentValue, currentIndex, array) {
    return currentValue * 2;
});

console.log("RESULT: ", result);
console.log("ORIGINAL_ARRAY: ", numbers);

//map travers throgh each element of given array. apply any logic provided in the callback function
//and return a new array