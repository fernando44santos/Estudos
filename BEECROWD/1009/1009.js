var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var nome = valores.shift()
var sal = Number(valores.shift())
var vlr = Number(valores.shift())

var salario = (sal + (vlr*0.15))
console.log(`NUMBER = ${nome}`)
console.log(`TOTAL = ${salario.toFixed(2)}`)