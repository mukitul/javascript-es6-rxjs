let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let filtered = numbers.filter(function (currentValue, currentIndex, array) {
    //console.log("WORKING_ON_ARRAY: ", array);
    return currentValue > 4;
});
console.log("FILTERED_ARRAY: ", filtered);
console.log("ORIGINAL_ARRAY: ", numbers); //[1, 2, 3, 4, 5, 7, 8, 9, 10]