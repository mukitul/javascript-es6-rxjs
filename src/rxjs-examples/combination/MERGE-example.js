import { merge, from } from "rxjs";
/*
-- merge operator turn multiple observables into single observable
-- use merge operator when ORDER OF OUTPUT IS NOT A CONCERN

merge works in the following way:

-- subscribe to all source observables/promise
-- when a new value arrives from a source observable/promis, pass it down to an observer
-- only after all source observables complete, send complete notification to the observer.
-- if any of the source observables throws error, send error notification to the observer.
*/


const apiCallOne = async () => {

    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, { api: "api-one", name: "mukitul", address: "Dhaka" });
    }).catch((err) => {
        console.log("ERROR: ", err);
    })

}
const apiCallTwo = async () => {

    return await new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, { api: "api-two", name: "ratul", address: "Dhaka" });
    }).catch((err) => {
        console.log("ERROR: ", err);
    })

}

const source = merge(from(apiCallOne()), from(apiCallTwo()));

source.subscribe((val) => {
    console.log("VAL: ", val);
});