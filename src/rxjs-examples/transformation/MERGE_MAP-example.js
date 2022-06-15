import { catchError, of, from, map, mergeMap } from 'rxjs';
/*
-- mergeMap operator's return value is observable
-- mergeMap operator emits the result after applying the projection function 
   on each value of source observable and merging the results

mergeMap operator works in the following way:

-- subscribe to a source observable
-- when a new value arrives from a source observable, 
   execute a map function that returns an inner observable
-- subscribe to this inner observable
-- when this inner observable emits a value, pass it down to an observer
-- only after all inner observables complete, 
   send the complete notification to the observer.
-- if any of the source observables throws an error, 
   send the error notification to the observer.
*/