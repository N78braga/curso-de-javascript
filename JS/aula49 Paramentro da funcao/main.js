/**
 * Continuando com a aula de funções vamos aprender como passar parâmentro na função
 * 
 */

/*function função(){
    console.log('Oie');
}
função('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);*/

/**
 * Quando passamos para um valor conforme o exemplo acima ele só vai realizar a 
 * impressão da tela do valor que esta no console.log(); Mas para pode pegar o valor 
 * do que foi passado fora da função que foi valor, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 
 * usamos o arguments conforem o exemplo abaixo.
 */

/*
function função(){
    console.log(arguments);
}
função('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
A saida do console vai ser [Arguments] {
  '0': 'Valor',
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10
}*/


/**
 * Então podemos manipular todos os elemento que foi passado para função sem o parâmentro
 * e passando para variável especial arguments no exemplo acima depois passando dentro da 
 * função e depois pegamos elemento do primeiro indece conforme o exemplo abaixo 
 * e imprimindo ele na tela.
 * 
 * function função(){
 *     console.log(arguments[0]);
 * }
 * função('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
 * 
 * A saida do console vai ser (Valor)
 */

/**
 * Criando uma função que irar soma todos os número que foi passado fora sem um argumento
 * chamando a variável especial arguments conforme o exemplo abaixo.
 * 
 * function função(){
 *  let total = 0;
 * for(let argumento of arguments){
 * for(let argumento of arguments){
 *  total += argumento;
 *    }
 * console.log(total);
 * }
 * função(1, 2, 3, 4, 5, 6, 7);
 *  saida do console vai ser a soma de todos os número que é ( 28 )
 */


/**
 * Manupulando function com parâmentro
 * 
 * function função(a, b, c, d, e, f){
 *  console.log(a, b, c, d, e, f);
 * }
 * função(1, 2, 3, 4, 5, 6, 7);
 * saida do console vai ser 1 2 3 4 5 6
 */

/**
 * Somando os valores do parâmentro
 * 
 * function função(a, b){
 * console.log(a + b);
 * }
 * função(2);
 * 
 * saida do console vai ser NaN
 */

/**
 * Somando os valores do parâmentro
 * 
 * function função(a, b){
 *  b = b || 0; forma antiga de resolver o problema do NaN quando não for passado valor
 *  console.log(a + b);
 * }
 * função(2);
 * A Saida vai ser a soma dos valores se for passado algum valor para b
 * se não b vai passar a ser 0 e vai ser soma ao valor
 */

/**
 * Passan do dentro do parâmentro um argumento de soma mas moderno
 * conforme o exemplo abaixo. E neste exemplo vamos aprende como passa 
 * o valor por padrão que esta sendo passado dentro da função
 * 
 * function função(a, b = 2, c = 4){
 * console.log(a + b + c);
 * }
 * função(2, undefined, 20);// pegando o valor que esta passando a variável [ b ] e saida é 24
 * função(2, '', 20);// nesta saida ele vai concatena e mostra à saida 220 
 * função(2, null, 20);// Nesta saida ele vai assumir o null como [0] e vai soma a saida via ser 22
 */

/**
 * Atribuição via desistruturação
 * function função({nome, sobrenome, idade}){// realizando a desistruturação
 *  console.log(nome, sobrenome, idade);
 * }
 * //função({nome: 'Ernando', sobrenome: 'Braga', idade: 35});//enviado o objeto literalmente como parâmentro
 * 
 * let obj = {nome: 'Ernando', sobrenome: 'Braga', idade: 35};// Podemos também cria uma variável que receba um objeto
 * função(obj);
 */

/**
 * Atribuição cia desistrituração de Array
 * 
 * function função([valor1, valor2, valor3]){
 * console.log(valor1, valor2, valor3);
 * }
 * 
 * Podemos também cria uma variável que receba um array
 * let arr = ['Ernando', 'Braga', 30];
 * função(arr);
 * 
 * Ou realizar direto a desitrituração passando direto na função conforme o exemplo abaixo
 * função(['Ernando', 'Braga', 30]);
 */

/**
 * utililzando o reste operetion ... toda as vezes que for usar o reste opretion tem que ser 
 * o ultimo parâmentro da função.
 * 
 * function conta(operador, acumulado, ...numeros){
 * for(let numero of numeros){
 * if(operador === '+')acumulado += numero;
 * if(operador === '-')acumulado -= numero;
 *  if(operador === '/')acumulado /= numero;
 * if(operador === '*')acumulado *= numero;
 * console.log(acumulado);
 * }
 *  }
 * conta('+', 0, 20,30,40,50);
 */

/**
 * Criando uma function express
 * 
 * const conta = function(operador, acumulado, ...numeros){
 * for(let numero of numeros){
 * if(operador === '+')acumulado += numero;
 * if(operador === '-')acumulado -= numero;
 * if(operador === '/')acumulado /= numero;
 * if(operador === '*')acumulado *= numero;
 * }
 * console.log(acumulado);
 * };
 * conta('+', 0, 20,30,40,50);
 */

/**
 * Usando o arrow function criar uma variável que receba a função e substitui o nome function pelo 
 * sinal => conforme e após a chave utilizar o pon to e virgula o exemplo abaixo 
 * 
 * const conta = (operador, acumulado, ...numeros)=>{
 *  console.log(numeros);
 *  };
 * conta('+', 0, 20,30,40,50);
 */

/**
 * Pegando os arguments com o reste opreiton e arrow function conforme o exemplo abaixo
 */
const conta = (...args)=>{  
    console.log(args);
};
conta('+', 1, 20,30,40,50);








