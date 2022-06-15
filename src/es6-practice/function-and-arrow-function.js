/*
regular-function vs arrow-function -- differences:
1. 'this' value
'this' refers execution context.
Inside of a regular javascript function value of 'this' is dynamic. Value of 'this' changes by depending on 
how the regular function is invoked. There are 4 ways of invocation - 
i) simple invocation - invoke function from global context, than value of 'this' inside the function will be 
global object
ii) method invocation - invoke funtion using object's name, than value of 'this' inside the function will be 
the object's context
iii) indirect invocation - an indirect invocation using myFunc.call(thisVal, arg1, ..., argN) or 
myFunc.apply(thisVal, [arg1, ..., argN]) the value of this equals to the first argument
iv) constructor invocation - invocation using new keyword, than 'this' equals to the newly created instance

Now, arrow function doesn't define its own execution context. No matter how or where being executed, 'this' 
value inside of an arrow function always equals this value from the outer function.

2. as a constructor
regular function -  can be used as constructor, this function easily construct objects
arrow function - arrow function cannot be used as a constructor

3. implicit return
regular function - if there is return statement this function simply returns the result, if there is no return
statement than simply returns 'undefined'
arrow function - same as regular function but if the arrow function is one liner with a return statement than
there is no need to use 'return' keyword

4. argument object
regular function - inside the body of a regular function, arguments is a special array-like object 
containing the list of arguments with which the function has been invoked
arrow function - no special keyword like 'arguments' is defined inside an arrow function

5. as method
regular function - regular functions are the usual way to define methods on classes
arrow function - can use the arrow function as methods inside classes.
*/

//example of regular-function with simple-invocation
function sayHello() {
    console.log("sayHello: ", this);
}
sayHello();



//example of regular-function with method-invocation
const myObj = {
    name: "my object",
    print: function () {
        console.log("print-property | myObj: ", this)
    }
}
myObj.print();




//example of regular-function with indirect-invocation
function myFunction() {
    console.log("myFunction: ", this);
}
const myContext = { value: 'A' };
myFunction.call(myContext);
myFunction.apply(myContext);




//example of regular-function with constructor-invocation
function MyConstructor() {
    console.log("MyConstructor: ", this);
}
new MyConstructor();



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





// example of 'this' keyword inside callback function
// passing regular-function as callback function
const myReactAppInfo = {
    name: "MY_REACT_WEB_APP",
    lib: ['react', 'react-dom', 'router'],
    printInfo: function () {
        console.log("APP NAME: ", this.name);
        this.lib.forEach(function (value) {
            console.log(`${this.name} uses ${value}`)
        })
    }
}
myReactAppInfo.printInfo();

// passing arrow-function as callback function
const myReactAppInfoTwo = {
    name: "MY_REACT_WEB_APP_TWO",
    lib: ['react', 'react-dom', 'router'],
    printInfo: function () {
        console.log("APP NAME: ", this.name);
        this.lib.forEach((value) => {
            console.log(`${this.name} uses ${value}`)
        })
    }
}
myReactAppInfoTwo.printInfo();