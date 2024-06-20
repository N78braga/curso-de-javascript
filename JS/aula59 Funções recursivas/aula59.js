/**
 * Conhecendo a recursividade em javaScript
 * O que é recursividade
 * Recursividade é uma função que chama ela mesmo ou seja 
 * trata de função que se utiliza de se mesma para fazer as suas operações
 * exemplo.
 * 
 * function recursiva(max){
 * if(max >= 10) return;
 * max++;
 * console.log(max);
 * recursiva(max);
 * }
 */

function recursiva(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0);