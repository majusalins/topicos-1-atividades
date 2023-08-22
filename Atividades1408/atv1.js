/*1. Faça um script que recebe o salário de um colaborador e o  reajuste segundo o seguinte critério, baseado no salário atual: 
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, 

informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento.*/



function reajusteSalarial(salario) {
    let salarioReajustado = salario;
    let valorReajuste;

    console.log("\n-----------------------\n");

    if (salario <= 280) {
        valorReajuste = salario * 0.20;
        salarioReajustado = salario + valorReajuste;
        console.log("O salário inicial é de R$" + salario + ",00, o percentual de aumento foi de 20%, acrescentando o valor de R$" + valorReajuste + ",00, resultando no salário total de R$" + salarioReajustado + ".");
    }

    else if (salario > 280 && salario <= 700) {
        valorReajuste = salario * 0.15;
        salarioReajustado = salario + valorReajuste;
        console.log("O salário inicial é de R$" + salario + ",00, o percentual de aumento foi de 15%, acrescentando o valor de R$" + valorReajuste + ",00, resultando no salário total de R$" + salarioReajustado + ".");
    }
    else if (salario > 700 && salario <= 1500) {
        valorReajuste = salario * 0.10;
        salarioReajustado = salario + valorReajuste;
        console.log("O salário inicial é de R$" + salario + ",00, o percentual de aumento foi de 10%, acrescentando o valor de R$" + valorReajuste + ",00, resultando no salário total de R$" + salarioReajustado + ".");
    }

    else {
        valorReajuste = salario * 0.05;
        salarioReajustado = salario + valorReajuste;
        console.log("O salário inicial é de R$" + salario + ",00, o percentual de aumento foi de 5%, acrescentando o valor de R$" + valorReajuste + ",00, resultando no salário total de R$" + salarioReajustado + ".");
    }

}

module.exports = reajusteSalarial;