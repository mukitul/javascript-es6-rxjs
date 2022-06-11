//normal function
function sayHello() {
    console.log("sayHello: Hello");
}
sayHello();

// arrow function with single statement
const exampleOne = () => console.log("exampleOne: Hello");
exampleOne();

// arrow function with single return statement -- no need to write "return"
const exampleTwo = () => 10;
console.log("exampleTwo: ", exampleTwo());

// arrow function with multiple line with return statement
const exampleThree = () => {
    const a = 20;
    const b = 10;
    return a + b;
};
console.log("exampleThree: ", exampleThree());

// arrow function with single return statement and with parameters
const exampleFour = (a, b) => a + b;
console.log("exampleFour: ", exampleFour(5, 12));


/*
*/



const schoolInfo = {
    name: "btri high school",
    address: "sreemangal",
    printInfo: function() {
        console.log("name: ", this.name);
        setTimeout(function() {
            console.log("address: ",this.address); // a normal function creates it's own 'context/this' and doesn't care about outer scope's 'this'.
        }, 1000);
    }
}

schoolInfo.printInfo();

const schoolInfoTwo = {
    name: "btri high school",
    address: "sreemangal",
    printInfo: function() {
        console.log("name: ", this.name);
        setTimeout(() => {
            console.log("address: ",this.address); // a normal function creates it's own 'context/this' and doesn't care about outer scope's 'this'.
        }, 1000);
    }
}

schoolInfoTwo.printInfo();