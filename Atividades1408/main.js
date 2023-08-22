/*main (parâmetros efetivos)*/

const reajusteSalarial = require('./atv1');
const calcularDescontos = require('./atv2');
const diaSemana = require('./atv3');
const descontoCombustivel = require('./atv4');
const promocaoCarnes = require('./atv5');

/*atvidade 1*/

reajusteSalarial(1500);

/*atvidade 2*/

calcularDescontos(5.00, 220);

/*atividade 3*/

diaSemana(3);

/*atividade 4*/

descontoCombustivel(20, "G");

/*atividade 5*/

promocaoCarnes(1, 5, 2);
