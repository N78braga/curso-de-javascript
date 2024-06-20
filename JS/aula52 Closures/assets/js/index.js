/**
 * Conhecendo o Closures
 * O que é o Closures 
 * E habilidade da função que está aninhada ou seja dentro de outra função de 
 * acessar o seu escopo lexícos  conforme o exempo abaixo
 */
function returnFunction(nome){
    return function(){
        return nome;
    };
}

const funcao = returnFunction('Ernando');
const funcao2 = returnFunction('Braga');
//console.log(funcao);
console.dir(funcao);// Nesta saida é diferênte no html pois eele mostra a estrutura de onde ela está
console.dir(funcao2);

console.log(funcao(), funcao2());