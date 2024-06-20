// Aprendendo a trabalha com funções

function fatorial(numero){
    if(numero == 0){
        return 1;
    }else{
        return numero*fatorial(numero - 1);
    }
}
const variavel = fatorial(5);
console.log(variavel);

/* quando for declarar uma variável que recebe uma função, 
a mesma tem que ser finalizada com ponto e virgula, Conforme o exemplo abaixo.
const raiz = function(n){
    return n ** 0.5;
};
console.log(raiz(9));*/

/* Uma outra de maneira de criar função com a eromfunction conforme o exemplo abaixo
é uma função mais moderna.
*/
const raiz = n => n ** 0.5;
console.log(raiz(9));

