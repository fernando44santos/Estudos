let s = 0
const a = prompt("digite o primeiro valor")
const b = prompt("digite o segundo valor")

function calc (){
  
if((b == 0)){
    alert("Não se pode dividir por zero")
}
else{
         s = a/b
        return console.log(s)
  
}



}
calc()