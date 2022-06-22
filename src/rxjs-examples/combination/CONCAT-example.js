import { concat, from } from "rxjs";
/*
-- concat operator turn multiple observables into single observable
-- use concat operator when ORDER OF OUTPUT IMPORTANT TO MAINTAIN
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

const source = concat(from(apiCallOne()), from(apiCallTwo()));

source.subscribe((val) => {
    console.log("VAL: ", val);
});