let details = null
// null is a stand alone value.
console.log(details);

let number
// undefined is a instance, where variable is declared but value is not intializsed.
console.log(number);


console.table([typeof details, typeof number]);

// null is object type and undefined is undefined type
// ┌─────────┬─────────────┐
// │ (index) │   Values    │
// ├─────────┼─────────────┤
// │    0    │  'object'   │
// │    1    │ 'undefined' │
// └─────────┴─────────────┘