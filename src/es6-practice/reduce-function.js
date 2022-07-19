let numbers = [1,2,3,4,5];

//find cumulative sum of these numbers in the array
let initialValue = 0;
let cumulativeSum = numbers.reduce((previousValue,currentValue)=>{
    return previousValue+currentValue;
},initialValue);

console.log("cumulativeSum: ", cumulativeSum);

/*
-- reduce doesn't change the main array
-- reduce function takes two parameter: callback function and initialValue (for required operations)
-- reduce's callback function takes four parameters: prevValue (result of last reduce function result),
   currentValue (current array element), currentIndex (index of current element), array (main working array)
*/

