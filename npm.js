const _ = require ('lodash');

const array = [1,[2,[3,[4]]]];

console.log(_.flattenDeep(array));