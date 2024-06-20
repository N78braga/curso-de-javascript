/**
 * Quando é usado a palavra return ela permite que retorne um valor 
 * e também faz que a função termine
 */

/**
 * Nesta função irar retorna o valor de a e b que será recebedo pelo parâmentro
 * function soma(a, b){
 * return a + b;
 * }
 * const a = 5;
 * const b = 2;
 * console.log(soma(a,b));
 */

/**
 * Nesta  função vai retorna void 
 * function soma(a, b){
 *  console.log(a + b);
 * }
 * soma(5,2);
 */

/**
 * Criando um objeto que retorna valores conforme o exemplo abaixo
 * 
 * function criaPessoa(nome, Sobrenome){
 * return {nome, Sobrenome};
 * }
 * const p1 = criaPessoa('Ernando', 'Braga');
 * console.log(p1);
 */

/**
 * Aumentando o grau de complexidade de retorno de uma função ou de objeto
 * conforme os exemplo a seguir
 */
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto;
}
/**
 * Obs quando uma variável recebe uma função ela vai passa a ser também uma função
 * e para chamar ela tem que abrir os () conforme o exemplo abaixo
 * 
 * const olaMundo = falaFrase('Olá');
 * console.log(olaMundo());//aqui a saida vai ser [Olá undefined] porque na função interna também tem que ter um valor
 * console.log(olaMundo('mundo!')); // saida vai ser [Olá mundo!]
 * 
 * Ou seja este chamada de função dentro de função seria a mesma coisa que fazer uma chamada de variáveis 
 * recebendo a função exemplo
 * 
 * const fala = falaFrase('Olá); cria uma variável que recebe a função falaFrase(){}
 * e depois está variável passar a ser uma função -> fala() e declara outra variável que recebe
 * a função fala e dentro dela passa outro valor ou uma String con forme o exemplo.
 * const resto = fala('mundo!');
 * E sua saida vai ser [Olá mun do!]
 * 
 * Quando e onde é que usamos esta complexidade de função exemplo de código que usamos 
 * este grau de complexidade 
 */

function criaMultiplicador(multiplicador){// função close ou seja função de fechamento
    // mutiplicador
    return function(n){
        return n * multiplicador;
    };
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));




