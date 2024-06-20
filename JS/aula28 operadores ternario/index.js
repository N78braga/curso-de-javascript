/**
 * Aula sobre operadores ternarios são eles
 * ? 
 * :
 * sendo primeiro a condição depois á [ ? ] que indica que o valor é verdadeira 
 * e depois [ : ] que indica que o valor é falsa
 * Obs: para usar a operação ternaria a mesma tem que ser atribuida a uma variável conforme
 * o exemplo abaixo
 */

/*const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);*/

/**
 * setendo um valor padrao  em uma variável atraves de uma expressão
 * conforme o exemplo abaixo
 */
const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao);
