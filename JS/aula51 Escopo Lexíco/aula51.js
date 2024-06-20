/**
 * Conhecendo o Escopo lexíco é quando a função reconhece onde a variável foi 
 * declara e caputura o seu valor tanto dentro dela quanto esta ao seu redor nos visinho
 *  
 * const nome = 'Liuz';
 * function falaNome(){
 * console.log(nome);
 * }
 * falaNome();
 */

const nome = 'Liuz';
function falaNome(){
    
    console.log(nome);
}
function usaFalaNome(){
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();