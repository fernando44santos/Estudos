var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var ID = Number(valores.shift())
var Hrs = Number(valores.shift())
var vlr = Number(valores.shift())

var salario = (Hrs * vlr)
console.log(`NUMBER = ${ID}`)
console.log(`SALARY = ${salario.toFixed(2)}`)