let numbers = [1, 2, 3, 0, -1, 8, 9, 10];

//splice function changes original array

//remove 0,-1 and insert 4,5,6,7 in that position
let startIndex = 3;
let numberOfElementsToRemove = 2;

let removedElements = numbers.splice(startIndex, numberOfElementsToRemove, 4, 5, 6, 7);

console.log("ORIGINAL_ARRAY: ", numbers);
console.log("REMOVED_ELEMENTS: ", removedElements);