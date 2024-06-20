/**
 * Conhecendo as diferença entre VAR e LET e onde são 
 * mas utilizdas nos códigos
 */


/**
 * O Let não apresentou erro dentro do if quando foi redeclarada 
 * porque o LET tem escopo de bloco{...bloco} ou seja pode ser redeclara 
 * dentro de um bloco.
 * O Var ele só tem escopo de função
 */
/*let nome = 'Luiz'; // Aqui esta criando uma variável
var nome2 = 'Luiz';
const verdadeira = true;

if(verdadeira){
    let nome = 'Otávio';// Aqui esta criando uma outro variável com o mesmo nome dentro do bloco
    console.log(nome, nome2);
}*/

// Agora vamos ao exemplo com o Var
/*const verdadeira = true;
let nome = 'Luiz'; // Aqui esta criando uma variável
var nome2 = 'Luiz';// Criando
var nome2 = 'Otávio';// Aqui está sendo redeclarada
console.log(nome, nome2);
if (verdadeira) {
    let nome = 'Otávio';// Aqui esta criando uma outro variável com o mesmo nome dentro do bloco
    var nome2 = 'Rogério';// Aqui está sendo redeclarada
    console.log(nome, nome2);
    if (verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Ronaldo';// Aqui está sendo redeclarada
        

    }
}
console.log(nome, nome2);*/

//O que é escopo de função
// a funções elas proteje as variáveis conforme o exemplo abaixo
/*var sobreNome = 'Miranda';
function falaOi(){
    console.log(sobreNome);
}
falaOi();*/
/**
 * Ou seja a função ela pode pegar entorno dela um valor que esta em uma variável
 * porem ela não deixar que você pegue o valor que esta dentro dela e faça uama saida 
 * dela conforme o exemplo abaixo.
 * 
 * function falaOi(){
 *  var sobreNome = 'Miranda';
 * }
 * console.log(sobreNome);
 * falaOi();
 */
