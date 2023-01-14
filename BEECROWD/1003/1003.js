var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var a = Number(valores.shift())
var b = Number(valores.shift())

var s = a + b

console.log('SOMA = ' + s )