/*1. O Hipermercado Assaí está com uma promoção de carnes que é imperdível. Confira:
    
                        Até 5 Kg               Acima de 5 Kg
    
    File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
    
    Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
    
    Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg
    
Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, 
porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Assaí o cliente 
receberá ainda um desconto de 5% sobre o total a compra. 
Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, 
contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.*/


function promocaoCarnes(tipoCarne, pesoCarne, tipoPagto) {
    let valor, desconto = 0, valorfinal;
    /*tipo de carne: 1 para filé duplo, 2 para alcatra e 3 para picanha.
    tipo de pagamento: 1 para comum e 2 para cartão assaí.*/

    console.log("\n-----------------------\n");

    if (tipoCarne == 1) {
        tipoCarne = "Filé Duplo";
        if (pesoCarne <= 5) {
            valor = pesoCarne * 4.90;
        }
        else {
            valor = pesoCarne * 5.80;
        }
    }

    else if (tipoCarne == 2) {
        tipoCarne = "Alcatra";
        if (pesoCarne <= 5) {
            valor = pesoCarne * 5.90;
        }
        else {
            valor = pesoCarne * 6.80;
        }
    }

    else if (tipoCarne == 3) {
        tipoCarne = "Picanha";
        if (pesoCarne <= 5) {
            valor = pesoCarne * 6.90;
        }
        else {
            valor = pesoCarne * 7.80;
        }
    }

    if (tipoPagto == 1) {
        console.log("Tipo da carne: " + tipoCarne);
        console.log("Quantidade de carne: " + pesoCarne + "kg");
        console.log("Preço total: R$" + valor);
        console.log("Tipo de pagamento: " + tipoPagto);
        console.log("Valor do desconto: " + desconto);
        console.log("Valor a pagar: " + valor);
    }
    
    else if (tipoPagto == 2) {
        desconto = valor * 0.05;
        valorfinal = valor - desconto;
        console.log("Tipo da carne: " + tipoCarne);
        console.log("Quantidade de carne: " + pesoCarne + "kg");
        console.log("Preço total: R$" + valor);
        console.log("Tipo de pagamento: " + tipoPagto);
        console.log("Valor do desconto: " + desconto);
        console.log("Valor a pagar: " + valorfinal);
    }

}

module.exports = promocaoCarnes;