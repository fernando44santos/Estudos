var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var A = Number(valores.shift())
var B = Number(valores.shift())
var C = Number(valores.shift())

var pesoA = 2
var pesoB = 3
var pesoC = 5
var pesoT = 10

var media 
media = ((A * pesoA) + (B * pesoB) + (C * pesoC))/pesoT

console.log('Media = ' + media.toFixed(1))


