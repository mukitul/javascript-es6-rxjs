# javascript-es6-rxjs
practice project for learning modern javascript syntax (es6) and reactive programming using rxjs.

## JavaScript-ES6

- [Regular Function vs Arrow Function](./src/es6-practice/function-and-arrow-function.js)


## RxJS
### Operator Function Category
Combination, Coditional, Creation, ErrorHandling, Filtering, Multicasting, Transformation, Utility

### Category wise Operator Function
| Category       | Operator                |
| -------------- | ----------------------- |
| Creation       | of, from                |
| Combination    | merge, mergeAll, concat |
| Transformation | map, mergeMap           |
| ErrorHandling  | catchError              |

### Reference
#### Creation
- `of` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/creation/of) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/of) | [code](./src/rxjs-examples/creation/OF-example.js)
- `from` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/creation/from) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/from) | [code](./src/rxjs-examples/creation/FROM-example.js)

#### Combination
- `merge` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/merge) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/merge) | [code](./src/rxjs-examples/combination/MERGE-example.js)
- `mergeAll` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/mergeall) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/merge-all) | [code](README.md)
- `concat` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/combination/concat) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/concat) | [code](./src/rxjs-examples/combination/CONCAT-example.js)

#### Transformation
- `map` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/transformation/map) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/map) | [code](./src/rxjs-examples/transformation/MAP-example.js)
- `mergeMap` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/merge-map) | [code](./src/rxjs-examples/transformation/MERGE_MAP-example.js)

#### ErrorHandling
- `catchError` : [learnrxjs.io](https://www.learnrxjs.io/learn-rxjs/operators/error_handling/catch) | [indepth.dev](https://indepth.dev/reference/rxjs/operators/catch-error) | [code](README.md)