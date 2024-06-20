/**
 * Conhecendo o Filter em um array
 * 
 * O que é Filter 
 * O método filter é uma função nativa do JavaScript que permite 
 * filtrar os elementos de um array de acordo com determinados critérios. 
 * Ele cria um novo array com todos os elementos que passam em um teste específico 
 * fornecido por uma função de callback. 
 * 
 * ( Filtrando os maiores valores do array )
 * const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 * const numerosMaioresFiltrados =  numeros.filter( valor => valor > 10);
 * console.log(numerosMaioresFiltrados);
 * 
 * saida do console -> [ 50, 80, 11, 15, 22, 27 ]
 * Neste filtrverificamos os valore maiores que 10 por isso que a saida 
 * do console foram 6 número maior que 10.
 * 
 * 
 * 
 * Retorne as pessoas que tem o nome com 5 letras ou mais
 * Retorne as pessoas com mais de 50 anos
 * Retorne as pessoas cujo o neme termina com a
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }

];

const nomeMaiorDePessoas = pessoas.filter(obj =>  obj.nome.length >= 5);
const idadeMaiorciquenta = pessoas.filter(obj => obj.idade > 50);
const nomesComFinalA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

     console.log('Pessoas com o nome com mas de 5 letras:');
     console.log(nomeMaiorDePessoas);

     console.log('-----------------------------------');

     console.log('Pessoas com o nome com mas de 50 anos:');
     console.log(idadeMaiorciquenta);

     console.log('-----------------------------------');

     console.log('Pessoas com o nome que termina com a letra [ a ]:');
     console.log(nomesComFinalA);


