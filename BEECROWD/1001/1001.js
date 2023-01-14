var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')
var A = Number(valores.shift())
var B = Number(valores.shift())
var X = A + B
console.log('X = ' + X)