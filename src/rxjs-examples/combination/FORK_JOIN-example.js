import { catchError, forkJoin, from, of, pipe } from "rxjs";
/*

USE_CASE:
One common use case for this is if we wish to issue multiple requests on page load and only want to take 
action when a response has been received for all.
*/


const apiCallOne = async () => {

    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 0, { api: "api-one", name: "mukitul", address: "Dhaka" });
    }).catch((err) => {
        console.log("ERROR: ", err);
    })

}
const apiCallTwo = async () => {

    return await new Promise((resolve, reject) => {
        // setTimeout(resolve, 1000, { api: "api-two", name: "ratul", address: "Dhaka" });
        setTimeout(reject, 0, { api: "api-two", error: "ERROR OCCURED" });
    }).catch((err) => {
        console.log("ERROR: ", err);
    })

}

const apiCallThree = async () => {

    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 0, { api: "api-three", name: "islam", address: "Dhaka" });
    }).catch((err) => {
        console.log("ERROR: ", err);
    })

}

//no error handling
const sourceOne = forkJoin({
    api_one: apiCallOne(),
    api_two: apiCallTwo(),
    api_three: apiCallThree()
});

sourceOne.subscribe((val) => {
    console.log("NO_ERROR_HANDLING | VAL: ", val);
});


//error handling outside
const sourceTwo = forkJoin({
    api_one: apiCallOne(),
    api_two: apiCallTwo(),
    api_three: apiCallThree()
}).pipe(
    catchError((err) => { return of(err) })
);

sourceTwo.subscribe((val) => {
    console.log("HANDLING_ERROR_OUTSIDE | VAL: ", val);
});


//error handling : Getting successful results when one inner observable errors
const sourceThree = forkJoin({
    api_one: apiCallOne(),
    api_two: from(apiCallTwo()).pipe(
        catchError((err) => { return of(err) })
    ),
    api_three: apiCallThree()
});

sourceThree.subscribe((val) => {
    console.log("Getting successful results when one inner observable errors | VAL: ", val);
});