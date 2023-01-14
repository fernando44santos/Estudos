var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var a = Number(valores.shift())
var b = Number(valores.shift())
var ap = 3.5
var bp = 7.5
var n = 11

var media = ((a*ap)+(b*bp))/n

console.log('MEDIA = ' + media.toFixed(5))