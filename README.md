# javascript-es6-rxjs
practice project for learning modern javascript syntax (es6) and reactive programming using rxjs.

## javascript version
JavaScript was invented by Brendan Eich in 1995, and became an ECMA standard in 1997.

ECMAScript is the official name of the language.

ECMAScript versions have been abbreviated to ES1, ES2, ES3, ES5, and ES6.

Since 2016, versions are named by year (ECMAScript 2016, 2017, 2018, 2019, 2020).


## JavaScript(ES6) Examples

- [Regular Function vs Arrow Function](./src/es6-practice/function-and-arrow-function.js)
- [Truthy And Falsy In JavaScript](./src/es6-practice/truthy-and-falsy.js)
- [Ternary Operator In JavaScript](./src/es6-practice/ternary-operator.js)
- [Find Function In JavaScript](./src/es6-practice/find-function.js)
- [Find_Index Function In JavaScript](./src/es6-practice/findIndex-function.js)
- [Filter Function In JavaScript](./src/es6-practice/filter-function.js)
- [Slice Function In JavaScript](./src/es6-practice/slice-function.js)
- [Splice Function In JavaScript](./src/es6-practice/splice-function.js)
- [Concat and Push Function In JavaScript](./src/es6-practice/concat-and-push-function.js)
- [Map Function In JavaScript](./src/es6-practice/map-function.js)
- [Reduce Function In JavaScript](./src/es6-practice/reduce-function.js)
- [Double Equal & Triple Equal Example In JavaScript](./src/es6-practice/equality-check-example.js)
- [String related Functions in JS (W3School)](https://www.w3schools.com/jsref/jsref_obj_string.asp)

## Promise/Async/Await

- [Async/Await & Promise](./src/async-await-callback/async-await-example.js)


## RxJS
### Operator Function Category
Combination, Coditional, Creation, ErrorHandling, Filtering, Multicasting, Transformation, Utility

### Category wise Operator Function
| Category       | Operator                          |
| -------------- | --------------------------------- |
| Creation       | of, from                          |
| Combination    | merge, mergeAll, concat, forkJoin |
| Transformation | map, mergeMap                     |
| ErrorHandling  | catchError                        |

### Reference
#### Creation
- `of` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/creation/of) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/of) | [code](./src/rxjs-examples/creation/OF-example.js)
- `from` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/creation/from) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/from) | [code](./src/rxjs-examples/creation/FROM-example.js)

#### Combination
- `merge` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/merge) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/merge) | [code](./src/rxjs-examples/combination/MERGE-example.js)
- `mergeAll` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/mergeall) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/merge-all) | [code](README.md)
- `concat` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/concat) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/concat) | [code](./src/rxjs-examples/combination/CONCAT-example.js)
- `forkJoin` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/forkjoin) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/fork-join) | [code](./src/rxjs-examples/combination/CONCAT-example.js)

#### Transformation
- `map` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/map) | [code](./src/rxjs-examples/transformation/MAP-example.js)
- `mergeMap` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/merge-map) | [code](./src/rxjs-examples/transformation/MERGE_MAP-example.js)

#### ErrorHandling
- `catchError` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/catch-error) | [code](README.md)