/**
 * Declaração de função 
 * Quando é declarado uma função contece com ela o hoist 
 * e com isso em qualquer momento que ela for chamada e irar 
 * funcionar conforme o exemplo abaixo. Neste exemplo a função foi chamada 
 * acima do do bloco estruturado ou seja, não segui um princio de estrutura para este 
 * caso como outras liguagem.
 */

/**
 * First-class objects (Objeto de primeira classe) ou seja toda as funções 
 * é um objeto de primeira classe e pode ser declarada como paramentro ou não a
 * função pode ter um nome ou ser uma função anonima sem nome.
 * Exemplo de função nomeada -> function comNome(){}
 * Exemplo de função anonima -> function(){}
 */
falaOi();
function falaOi(){
    console.log('Oie');
}


// Function expressiona (Expressão de função)
const souUmDado = function(){
    console.log('Sou um dado.');
};
souUmDado();

/* usando uma função para executa outra função
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);
*/

// Usando a função Arrow function
const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
};
funcaoArrow();

/**
 * Funções declarando uma função dentro de um objeto
 * só para lembrar que os atributo de dentro do objeto para atribuir alguma coisa 
 * a ele tem que ser o sinal de dois ponto conforme o exemplo abaixo pois é diferente 
 * da variável que é o sinal de =, e diferente da função  o objeto para ser impresso na tela
 * é nome do objeto ponto mas o que for chamdo conforme o exemplo abaixo
 * 
 * const objeto = {
 *   falar: function(){
 *       console.log('Estou falando...');
 *     }
 * };
 * objeto.falar();
 */ 

// Atribuindo uma função na nova versão do javascript
const objeto = {
       falar() {
           console.log('Estou falando...');
         }
     };
     objeto.falar();

    
       
  

