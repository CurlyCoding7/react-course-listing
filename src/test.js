import dummyjson from 'dummy-json';

const template = `{
  "name": "{{firstName}}",
  "age": "{{int 18 65}}"
}`;
const result = dummyjson.parse(template); 

console.log(result);