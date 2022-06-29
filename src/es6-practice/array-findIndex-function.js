//example #1
let nums = [1, 3, 4, 5, 7]
let indexResult = nums.findIndex(function (currentValue, currentIndex, array) {
    return (currentValue % 2) === 0;
});
console.log(indexResult);


//example #2
let anotherArray = [
    {
        id: 1,
        name: "a"
    },
    {
        id: 2,
        name: "ab"
    },
    {
        id: 3,
        name: "abc"
    }
]

//check if any name "bbc" exist in the array
let nameExist = anotherArray.findIndex((currentValue) => {
    return currentValue.name === "bbc";
});
console.log("NAME_EXIST: ", nameExist);
if (nameExist!=-1) {
    console.log("EXIST");
} else {
    console.log("NOT_EXIST");
}