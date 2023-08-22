/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
Álcool: até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro
Gasolina: até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro 
Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), 
calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.*/

function descontoCombustivel(litros, tipo) {
    console.log("\n-----------------------\n");
    let valor;
    if (tipo == "A") {
        valor = litros * 1.90;
        if (litros <= 20) {
            valor -= (valor * 0.03);
            console.log("Valor a ser pago no combustível: R$" + valor + ",00");
        }
        else {
            valor -= (valor * 0.05);
            console.log("Valor a ser pago no combustível: R$" + valor + ",00");
        }
    }

    else if (tipo == "G") {
        valor = litros * 2.50;
        if (litros <= 20) {
            valor -= (valor * 0.04);
            console.log("Valor a ser pago no combustível: R$" + valor + ",00");
        }
        else {
            valor -= (valor * 0.06);
            console.log("Valor a ser pago no combustível: R$" + valor + ",00");
        }
    }

}
module.exports = descontoCombustivel;