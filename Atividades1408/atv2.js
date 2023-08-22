/*1. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, 
que depende do salário bruto (conforme tabela abaixo) e 10% para o INSS e que o FGTS corresponde a 11% do Salário Bruto, mas não
 é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. 
 O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

Desconto do IR:
Salário Bruto até 900 (inclusive) - isento
Salário Bruto até 1500 (inclusive) - desconto de 5%
Salário Bruto até 2500 (inclusive) - desconto de 10%
Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo.*/


function calcularDescontos(valorHora, numHoras) {
    let salarioBruto = (valorHora * numHoras);
    let descontoIR;
    let descontoINSS = (salarioBruto * 0.10);
    let valorFGTS = (salarioBruto * 0.11);
    let salarioLiquido = ((salarioBruto - descontoIR) - descontoINSS);

    console.log("\n-----------------------\n");

    if (salarioBruto <= 900) {
        descontoIR = 0;
        console.log("Salário Bruto: R$" + salarioBruto + ",00");
        console.log("(-) IR (ISENTO): R$" + descontoIR + ",00");
        console.log("(-) INSS (10%): R$" + descontoINSS + ",00");
        console.log("FGTS (11%): R$" + valorFGTS + ",00");
        console.log("Total de descontos: R$" + (descontoIR + descontoINSS) + ",00");
        console.log("Salário Líquido: R$" + salarioLiquido + ",00");
    }

    else if (salarioBruto <= 1500) {
        descontoIR = salarioBruto * 0.05;
        let salarioLiquido = ((salarioBruto - descontoIR) - descontoINSS);
        console.log("Salário Bruto: R$" + salarioBruto + ",00");
        console.log("(-) IR (5%): R$" + descontoIR + ",00");
        console.log("(-) INSS (10%): R$" + descontoINSS + ",00");
        console.log("FGTS (11%): R$" + valorFGTS + ",00");
        console.log("Total de descontos: R$" + (descontoIR + descontoINSS) + ",00");
        console.log("Salário Líquido: R$" + salarioLiquido + ",00");
    }

    else if (salarioBruto <= 2500) {
        descontoIR = salarioBruto * 0.10;
        let salarioLiquido = ((salarioBruto - descontoIR) - descontoINSS);
        console.log("Salário Bruto: R$" + salarioBruto + ",00");
        console.log("(-) IR (10%): R$" + descontoIR + ",00");
        console.log("(-) INSS (10%): R$" + descontoINSS + ",00");
        console.log("FGTS (11%): R$" + valorFGTS + ",00");
        console.log("Total de descontos: R$" + (descontoIR + descontoINSS) + ",00");
        console.log("Salário Líquido: R$" + salarioLiquido + ",00");
    }

    else {
        descontoIR = salarioBruto * 0.20;
        let salarioLiquido = ((salarioBruto - descontoIR) - descontoINSS);
        console.log("Salário Bruto: R$" + salarioBruto + ",00");
        console.log("(-) IR (20%): R$" + descontoIR + ",00");
        console.log("(-) INSS (10%): R$" + descontoINSS + ",00");
        console.log("FGTS (11%): R$" + valorFGTS + ",00");
        console.log("Total de descontos: R$" + (descontoIR + descontoINSS) + ",00");
        console.log("Salário Líquido: R$" + salarioLiquido + ",00");
    }
}

module.exports = calcularDescontos;