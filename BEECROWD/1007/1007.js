var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var A = Number(valores.shift())
var B = Number(valores.shift())
var C = Number(valores.shift())
var D = Number(valores.shift())

var DIFERENCA = (A * B - C * D)

console.log('DIFERENÇA = ' + DIFERENCA)