let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 10];
let slicedResult = numbers.slice(6, 9);
console.log("SLICED_ARRAY: ", slicedResult); //[8, 9, 10]
console.log("ORIGINAL_ARRAY: ", numbers); //[1, 2, 3, 4, 5, 7, 8, 9, 10]

let slicedResultTwo = numbers.slice(-6, 9); // if negative than index counts from right to left but slicing works as usual (from left to right)
console.log("SLICED_ARRAY_TWO: ", slicedResultTwo); //[4,5,7,8, 9, 10]
console.log("ORIGINAL_ARRAY: ", numbers); //[1, 2, 3, 4, 5, 7, 8, 9, 10]