import { of, from } from 'rxjs';
//create two observables of type array
const arraySource = of([1, 2], [3, 4]);

//subscribe the observables of type array
arraySource.subscribe((array$) => {
    //receive each array observable in array$ variable
    console.log("ARRAY: ", array$);

    //create each element of array as observable
    const elementSource = from(array$);
    //receive each element observable in element$ variable
    elementSource.subscribe((element$) => {
        console.log("ELEMENT: ", element$);
    })
});