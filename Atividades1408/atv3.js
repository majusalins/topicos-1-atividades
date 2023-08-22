/*Faça um script que leia um número e exiba o dia correspondente da semana. 
(1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.*/


function diaSemana(dia) {
    console.log("\n-----------------------\n");
    if (dia > 7 && dia == 0) {
        console.log('Insira um número válido!')
    }
    else {
        if (dia == 1) {
            console.log("1 - Domingo");
        }
        if (dia == 2) {
            console.log("2 - Segunda-feira");
        }
        if (dia == 3) {
            console.log("3 - Terça-feira");
        }
        if (dia == 4) {
            console.log("4 - Quarta-feira");
        }
        if (dia == 5) {
            console.log("5 - Quinta-feira");
        }
        if (dia == 6) {
            console.log("6 - Sexta-feira");
        }
        if (dia == 7) {
            console.log("7 - Sábado");
        }
    }
}

module.exports = diaSemana;