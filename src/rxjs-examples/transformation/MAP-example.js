import { catchError, from, map } from 'rxjs';
/*
map operator works in the following way:

- subscribe to a source observable
- when a new value arrives from a source observable 
    execute the projection function (the function we write for performing various logic) 
    for the current value
- send the returned value to the observer
- once the source observable completes, send the complete notification to the observer
- if the source observable throws an error, send the error notification to the observer

*/
const apiCall = async () => {

    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, { name: "mukitul", address: "Dhaka" });
    }).catch((err) => {
        console.log("ERROR: ", err);
    })

}

const source = from(apiCall()).pipe(
    map((response) => {
        response.name = response.name.toUpperCase();
        return response;
    }),
    catchError((err) => {
        console.log("CAUGHT_ERROR: ", err);
    })
)

source.subscribe((val) => {
    console.log("VAL: ", val);
});