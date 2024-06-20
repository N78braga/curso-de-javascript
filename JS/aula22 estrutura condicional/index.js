/**
 * Operadores de comparação ou estrutura condicional
 * > -> Maior que 
 * >= -> Maior que ou igual a
 * < -> menor que
 * <= -> menor que ou igual a
 * == -> igualdade (realizar verificação só de VALOR)  obs: Não é recomendado a ultilização deste operador
 * === -> igualdade estrita (realizar a verificação de VALOR e TIPO)
 * != -> diferente (realizar verificação só de VALOR)  obs: Não é recomendado a ultilização deste operador
 * !== -> diferente estrito (realizar a verificação de VALOR e TIPO)
 */

/**
 * quando usamos o sinal de > estamos realizando uma verificação se o valor que esta 
 * na esquerda é maior que o valor que esta na direita conforme o exemplo abaixo
 * const compacao = 10 > 5; -> verificando se o valor 10 é maior que o valor 5
 * console.log(comparacao);
 */

/**
 * quando usamos o sinal de < estamos realizando uma verificação se o valor que esta 
 * na esquerda é menor que o valor que esta na direita conforme o exemplo abaixo
 * const compacao = 10 < 11; -> verificando se o valor 10 é menor que o valor 11
 * console.log(comparacao);
 */

/**
 * verificando a diferença  dos sinais do == para === é que 
 * no sinal == ele verifica o valor da variável ou seja 
 * se você passa um valor do tipo inteiro como 10 e um
 * valor String com 10 ele vai informar que os dois valores são
 * verdadeiro. Não detiguindo o tipo conforme o exemplo abaixo
 * 
 * const num1 = 10;
 * const num2 = '10';
 * const comparacao = num1 == num2;
 * console.log(comparacao); // verdadeiro mesmo num2 sendo uma String
 * para que serja verificado o tipo usa-se o comparador === conforme o exemplo abaixo
 * 
 *  const num1 = 10;
 * const num2 = '10';
 * const comparacao = num1 === num2;
 * console.log(comparacao); // saida será falsa porque ele esta verificando 
 * o tipo da variável.
 * 
 * 
 * verificando a diferença  dos sinais do != para !== é que 
 * no sinal != ele verifica o valor da variável ou seja 
 * se você passa um valor do tipo inteiro como 10 e um
 * valor String com 10 ele vai informar que os dois valores são
 * verdadeiro. Não detiguindo o tipo conforme o exemplo abaixo
 * 
 * const num1 = 10;
 * const num2 = '10';
 * const comparacao = num1 != num2;
 * console.log(comparacao); // falso mesmo num2 sendo uma String 
 * para que serja verificado o tipo usa-se o comparador !== conforme o exemplo abaixo
 * 
 *  const num1 = 10;
 * const num2 = '10';
 * const comparacao = num1 !== num2;
 * console.log(comparacao); // saida será falsa porque ele esta verificando 
 * o tipo da variável.
 */



