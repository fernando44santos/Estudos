var input = require('fs').readFileSync('stdin', 'utf8')
var valores = input.split('\n')

var R = Number(valores.shift())
var pi = 3.14159
var volume 

volume = ((4/3.0) * pi * (R* R *R))

console.log(`VOLUME = ${volume.toFixed(3)}`)
