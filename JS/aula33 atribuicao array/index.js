/**
 * Aula de atribuição via destruturação (Array)
 * 
 * O operador [...] quando é usado no sentido de pega o resto ele é chamado de [ rest ]
 * Já quando ele é usado no sentido  de espalha ou de distrubuir ele é chamado de [ spread ]
 */
/* indece           0     1     2     3     4     5     6     7     8
const  numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);// pegando os valores dos primeiros indece do array
console.log(resto);// pegando o resto do array com [... + o nome de uma variável]*/

/* indece           0     1     2     3     4     5     6     7     8
const  numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, ,cinco, ,sete, , nove] = numeros;
console.log(um, tres, cinco);*/
/*indece              0          1          2
//sub-indece       0  1  2    0  1  2    0  1  2
const  numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[,[,,seis]] = numeros;// usando a atribuição via destruturação
console.log(seis);*/

// Outra forma de realizar a atribuição via destruturação
//indece              0          1          2
//sub-indece       0  1  2    0  1  2    0  1  2
const  numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const[lista1, lista2, lista3] = numeros;// usando a atribuição via destruturação
console.log(lista3[2]);