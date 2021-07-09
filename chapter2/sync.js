/*

Synchoronous Style
Continuation-passing style (CPS).
Direct style
*/

function add (a, b) {
  return a + b
}

function addCps (a, b, callback) {
  return callback(a + b)
}

console.log('before')
addCps(1, 2, result => console.log(`Result: ${result}`))
console.log('after')