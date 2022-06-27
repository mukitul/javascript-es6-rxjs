//example - 1
/*find first number which is grater than 4*/
let numbers = [1, 2, 3, 4, 5];
let firstNumberGreaterThanFour = numbers.find(function (currentValue) {
    return currentValue > 4;
});
console.log("FIRST_NUMBER_GREATER_THAN_FOUR: ", firstNumberGreaterThanFour);


//example - 2
/*callback function in the find function takes 3 parameter: value,index and the array*/
let arrayTwo = [4, 2, 3, 5, 7];
let firstOddNumber = arrayTwo.find(function (currentValue, currentIndex, arrayTwo) {
    console.log("INDEX: ", currentIndex, " VALUE: ", currentValue);
    return currentValue % 2 !== 0;
});
console.log("FIRST_ODD_NUMBER: ", firstOddNumber);


//example - 3
let reactApp = {
    name: "REACT_APP",
    libs: [
        {
            id: 1,
            name: "react"
        },
        {
            id: 2,
            name: "react-dom"
        },
        {
            id: 3,
            name: "react-router-dom"
        },
        {
            id: 4,
            name: "rxjs"
        }
    ],
    findById: function (id) {
        this.libs.find(function (currentValue, currentIndex) {
            let libInfo = null;
            if (id === currentValue.id) {
                libInfo = currentValue;
                console.log("Library ", currentValue.name, " for ", this.name, " found at index ", (currentIndex + 1));
            }
            return libInfo;
        }, this);
    },
    findByIdUpdated: function (id) {
        this.libs.find((currentValue, currentIndex) => {
            let libInfo = null;
            if (id === currentValue.id) {
                libInfo = currentValue;
                console.log("Library ", currentValue.name, " for ", this.name, " found at index ", (currentIndex + 1));
            }
            return libInfo;
        });
    }

}

reactApp.findById(2);
reactApp.findByIdUpdated(2);