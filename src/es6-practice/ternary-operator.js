/*
lets assume we need to determine PASS or FAIL based on "obtainedMarks" variable value.
less than 40 is FAIL else PASS
*/
let obtainedMarks = 40;
let result = null;

//without ternary operator
if (obtainedMarks < 40) {
    result = "FAIL"
} else {
    result = "PASS";
}
console.log("RESULT_WITHOUT_TERNARY: ", result);


//without ternary operator
result = obtainedMarks < 40 ? "FAIL" : "PASS";
console.log("RESULT_USING_TERNARY: ", result);




// another example
let loginAttemptCount = 6;

let accessExampleOne = loginAttemptCount <= 5 ? true : false;
console.log("ACCESSEXAMPLEONE: ", accessExampleOne);
/*
when true/false is the only output in ternary operator than we can omit the true/false part. we can
rewrite the above example like below:
*/

let accessExampleTwo = loginAttemptCount <= 5;
console.log("ACCESSEXAMPLEOTWO: ", accessExampleOne);