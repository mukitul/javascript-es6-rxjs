function fetchData(url) {
    return new Promise(function(resolve,reject) {
        setTimeout(() => {
            let data = {"id":"1", "name": "mukit"};
            resolve(data);
            //reject("Failed to fetch data");
        }, 2000);
    });
}



async function processData() {
    try {
        let data = await fetchData("http://abc.com/data"); //fetchData function returns a promise and here by using await keyword we make execution of code wait till promise resolved.
        console.log("DATA: ", data); 
    } catch (error) {
        console.log("ERROR: ", error);
    }
}

processData();


/*
async: The async keyword is used to declare an asynchronous function. 
It allows the function to implicitly return a Promise, which can be resolved with a value or rejected with an error. 
An asynchronous function can contain one or more await expressions.

await: The await keyword can only be used inside an async function. 
It pauses the execution of the function until the Promise is resolved or rejected. 
While waiting for the Promise to settle, the await expression yields the resolved value of the Promise. 
This allows you to write asynchronous code that looks and behaves more like synchronous code.
*/
