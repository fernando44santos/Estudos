

microondas(1,5);
function microondas (prato, tempo){
    if (prato >= 1 && prato <= 5 && tempo >= 0) {

        if (prato == 1 && tempo >= 10 && tempo < 20 || prato == 2 && tempo > 8 && tempo < 16 || prato == 3 && tempo <= 15 && tempo < 30 || prato == 4 && tempo <= 12 && tempo < 24 || prato == 5 && tempo <= 8 && tempo < 16) {

        }

        else if (prato == 1 && tempo < 10 || prato == 2 && tempo < 8 || prato == 3 && tempo < 15 || prato == 4 && tempo < 12 || prato == 5 && tempo < 8) {
            console.log("Tempo insufuciente")

        }

        else if (prato == 1 && tempo >= 20 && tempo < 30 || prato == 2 && tempo >= 16 && tempo < 24 || prato == 3 && tempo >= 30 && tempo < 45 || prato == 4 && tempo >= 24 && tempo < 36 || prato == 5 && tempo >= 16 && tempo < 24) {
            console.log("A comida queimou")

        }
        else if (prato == 1 && tempo >= 30 || prato == 2 && tempo >= 24 || prato == 3 && tempo >= 45 || prato == 4 && tempo >= 36 || prato == 5 && tempo >= 24) {
            console.log("Kabummm")

        }



        console.log("Prato pronto, bom apetite!!!")
    }
    else {

        console.log("Prato inexistente")

    }
    return;
}


