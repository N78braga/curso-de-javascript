/**
 * Manupulando ainda o for e utilizando outro maneira do for
 */

/* for classico  quando e realizado a interação do i++ está realizando 
a soma de sempre mas 1 com isso ele realizar uma contagem de uma a quantidade 
do tamanho da condição que foi posta que no caso foi frutas e o tamanho do indece
que 3
const frutas = ['Pera', 'Maçã', 'Uva'];
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}*/

/**
 * for [ in ] neste for a leitura é dirata na quantidade dos indece 
 * do array ou seja ele lê os index quando for um objeto ele 
 * vai realizar a leitura das chaves
 * 
 * const frutas = ['Pera', 'Maçã', 'Uva'];
 * for(let index in frutas){]
 * console.log(frutas[index]);
 * }
 */

/**
 * Usando for [in] em um objeto
 */
const pessoa = {
    nome: 'Marcos',
    sobreNome: 'Apollo',
    idade: 35
};
for(let chave in pessoa){
    // console.log(chaves);// Realiza a impressão só das chave que é nome, sobreNome e idade
    //console.log(pessoa[chave]);// Realiza a impressão do valor das chaves 
    console.log(`${chave}: ${pessoa[chave]}`);// Realiza a impressão da chave e dos valores dela 
 }

/* Realizando a impressão do objeto sem passar o array conforme o exemplo abaixo
console.log(pessoa.nome);// pegando o valor que está na chave nome
console.log(pessoa['nome']); // Outra forma de realizar a impressão de um atributo do objeto
*/
