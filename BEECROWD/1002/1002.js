var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var r = Number(valores.shift())
var p = 3.14159

var A = p * (r*r)

console.log('A = ' + A.toFixed(4))
