import { of } from "rxjs";

/*
-- of is used to emit arguments as values in a sequence and then complete the stream
-- it does not do any flattening or conversion
-- if we pass an Array (including array-like objects), a Promise and an iterable object 
   it won’t be flattened into an observable sequence of values. 
   Those arguments will be emitted as the same type, 
   i.e. an Array, a Promise or an Iterable object without any conversion
*/

//1
const stringSource = of("mukitul");
const stringSourceSubscribe = stringSource.subscribe((val) => {
    console.log("VALUE: ", val, "TYPE: ");
});


//2
const numberSource = of(1, 2, 3, 4, 5);
const subscribeNumberSource = numberSource.subscribe((val) => {
    console.log("VALUE: ", val);
});


//3
const source = of({ name: 'Brian' }, [1, 2, 3], function hello() {
    return 'Hello';
});
const subscribe = source.subscribe((val) => {
    console.log(console.log(val))
});