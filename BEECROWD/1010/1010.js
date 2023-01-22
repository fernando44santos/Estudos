var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var ID = Number(valores.shift())
var qtdA = Number(valores.shift())
var vlrA = Number(valores.shift())
var IDb = Number(valores.shift())
var qtdB = Number(valores.shift())
var vlrB = Number(valores.shift())

var valor = ((qtdA * vlrA) + (qtdB * vlrB))
console.log(`VALOR A PAGAR:  ${valor.toFixed(2)}`)
