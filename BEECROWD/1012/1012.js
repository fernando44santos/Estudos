var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var A = Number(valores.shift())
var B = Number(valores.shift())
var C = Number(valores.shift())

var areaT = (A * C)/2
var areaC = (3.14159 * (C*C))
var areaTr = ((1/2) * (C*(A + B)))
var areaQ = (B*B)
var areaR = (A*B)

	
console.log(`TRIANGULO: ${areaT.toFixed(3)}`)
console.log(`CIRCULO: ${areaC.toFixed(3)}`)
console.log(`TRAPEZIO: ${areaTr.toFixed(3)}`)
console.log(`QUADRADO: ${areaQ.toFixed(3)}`)
console.log(`RETANGULO: ${areaR.toFixed(3)}`)


