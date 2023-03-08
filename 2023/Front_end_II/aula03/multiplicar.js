



function calc (){
    const a = prompt("digite o primeiro valor")
    const b = prompt("digite o segundo valor")
    if((a == 0) || (b == 0)){
        return console.log('0')
    }
    
    else{
       let s = a * b;
        return console.log(s)
    }

}
calc()