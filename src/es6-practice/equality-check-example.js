/*
Double Equals (==) checks for value equality only. 
It inherently does type coercion. 
This means that before checking the values, it converts the types of the variables to match each other.

Triple Equals (===) does not perform type coercion. 
It will verify whether the variables being compared have both the same value AND the same type.
*/

let foo = "foo";
let bar = "bar";

console.log(foo == bar); //false | different value
console.log(foo === bar); //false | same type but different value

let number = 1234;
let strNum = "1234";

console.log(number == strNum); //true | same value
console.log(number === strNum); //false | same value but different type

/*interesting case*/
console.log(0 == false) //true | same value
console.log(0 === false) //false | same value but different type


let str = ""
console.log(str == false) //true | same value
console.log(str === false) //false | same value but different type