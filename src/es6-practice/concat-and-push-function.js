let numArrayOne = [0, 1]
let numArrayTwo = [2, 3, 4]
let numArrayThree = [1, 2]
let numArrayFour = [5, 6, 7]

//concat function merges the array provided to the function

let concatResultOfOneAndThree = numArrayOne.concat(numArrayThree);
console.log("CONCAT_ONE_AND_THREE: ", concatResultOfOneAndThree);

let concatAll = numArrayOne.concat(numArrayTwo, numArrayThree, numArrayFour);
console.log("CONCAT_ALL: ", concatAll);



// push function pushed element to the end of the array and PUSH FUNCTION CHANGES MAIN ARRAY

let list = [1, 2, 3];
let pushResult = list.push(4);
console.log("PUSHED_RESULT: ", pushResult);
console.log("ORIGINAL_ARRAY: ", list);

