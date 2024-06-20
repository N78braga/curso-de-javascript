/**
 * && -> false && true -> false "O valor mesmo" ou seja quan do uma expressaõ for falsa 
 * toda as expressões vai se falsa mas quando as duas for verdadeira a saida vai ser verdadeira 
 * 
 * || -> true && false -> A saida do resultado é verdadeiro para que a saida seja verdadeira
 * basta que apenas uma das expressões seja verdadeira.
 */

/**
 * Quando for passado uma expressão que vai ser aváliado um valor falso como no exemplo
 *  o valor [0] ele retornara o valora falso conforme o exemplo abaixo dando uma aváliação de curto
 * circuito
 */
// console.log('Luiz Otávio' && 0 && 'Maria'); // retornan do o valor falso
//console.log('Luiz Otávio' && 1 && 'Maria'); // retornara o valor da ultima expressão que no caso é Maria
//console.log('Luiz Otávio' && true && 'Maria'); // retornara o valor da ultima expressão que no caso é Maria

/**
 * valores aváliadon em falso quando necessario são os que estão abaixo
 * literal o false
 * Os que estão abaixo são os FALSY
 * 0, 
 * String vazia que pode ser aspas simple '' ou aspa dupla "" ou crases ``
 * null ou undefined
 * NaN
 */
/*console.log('Luiz Otávio' && false && 'Maria'); // retorna falso
console.log('Luiz Otávio' && 0 && 'Maria'); // retorna zero
console.log('Luiz Otávio' && ' ' && 'Maria');// retorna vazio
console.log('Luiz Otávio' && " " && 'Maria'); //retorna vazio
console.log('Luiz Otávio' && ` ` && 'Maria'); //retorna vazio
console.log('Luiz Otávio' && null && 'Maria'); // retorna null
console.log('Luiz Otávio' && undefined && 'Maria'); // retorna undefined
console.log('Luiz Otávio' && NaN && 'Maria');*/ // retorna NaN

// Usando uma função para simular um if 
function falaOi(){
    return 'Oi';
}
const vaiExecurta = false;

console.log(vaiExecurta && falaOi());

/**
 * Exemplo do operador ||
 * 
 * console.log(0 || false || null || 'Luiz Otávio' || true);
 * retornará o valor Luiz Otávio por é um valor verdadeiro ou seja 
 * o indine do javascript saberar que Luiz Otávio não é uma String vazia
 * 
 * outro exemplo da saida do operador  quando as expressões são verdadeira
 *  const corUsuario = 'vermelho';
 * const corPadrao = corUsuario ||'preto';
 * console.log(corPadrao);
 * 
 */

