/*
6 Falsy values -- FALSE, NAN, "", 0, NULL, UNDEFINED
Truthy values -- anything not FALSY is truthy
*/

let myVar = undefined;

if(myVar){
    console.log("This is true");
}else{
    console.log("This is false");
}