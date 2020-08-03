// Now you can refer the imported module like.
// import Button from '@my-monorepo-scope/my-design-system-button';
var add = require('@my-monorepo-scope/my-design-system-button');
var substract = require('@my-monorepo-scope/my-design-system-core');


console.log('--------------Form package----------------');
console.log(`Addition 4,5: ${add(4,5)}`);
console.log(`Substraction 5,4: ${substract(5,4)}`);
console.log('------------------------------------------');
