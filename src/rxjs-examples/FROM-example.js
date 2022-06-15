import { from } from 'rxjs';
/*
-- from operator can be used to convert a promise to an observable
-- from operator emits all contained values of arrays and iterables as a sequence
-- from operator can also be used to emit a string as a sequence of characters


----------------------------------------------------------------------------------
from operator works in the following way:
-- create an observable instance
-- if the parameter is Array, 
      iterate over the source and emit array members as standalone values
-- if the parameter is Iterable, 
      iterate over the source and emit members as standalone values
-- if the source is Promise, 
      wait until the promise is resolved, and send the value to the observer. 
      if the promise is rejected, send the error notification to the observer
-- when there are no more values in the data source, 
      send the complete notification to the observer


-- from operator even works on an Observable-like objects,array etc
*/


const source = from("mukitul");
const subscribe = source.subscribe((val) => {
    console.log("VALUE: ", val);
});