/**
 * Continuação da aula de for conhecendo o for  OF, este for 
 * é especifico para objeto iteráveis como por exemplo 
 * para String ou um Array que contem indeces
 


const nomes = ['Luiz', 'Otávio', 'Henrique'];


 * realizando a iteração dos índice  da String em 
 * um for clássico e o for IN e obtendo uma sair de cada
 * índice  das letras  ou seja acessando cada letras -> L u i z  O t á v i o
 * 
 * for(let i = 0; i < nomes.length; i++){
        console.log(nomes[i]);
    }

   for(let i in nomes){
    console.log(nomes[i]);
   }



 * Quando é usado o OF ele obtem literalmente o valor da String ou do
 * objeto conforme o exemplo abaixo Obs: quando for chamado no console
 * o nomes da variável que esta sendo criada dentro do for para 
 * iteração a saida vai ser -> L u i Z  O t á v i o porém quando
 * for chamado no console a variável que foi criada fora do for é que vem depois 
 * do OF a saida vai ser -> o nomes que esta dentro da String repetida  X a quantidade
 * de letras que a String contem no caso do nomes LUIZ OTÁVIO vai repiti o nomes 11 vezes.
 * conforme o exemplo abaixo.
 * 
 * for(let valor of nomes){
 *     console.log(nomes);
 * }
 * 
 * for(let valor of nomes){
 * console.log(valor);
 * }
 
console.log('( For clássico) ');
for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
}
console.log('---------------------');
console.log('( For in )');
for(let i in nomes){
console.log(nomes[i]);
}
console.log('--------------------');
console.log('( For of ) '); 
for(let valor of nomes){
    console.log(valor);
}


 * Usando o forEach
 * No forEach podemos utilizalo de três forma na primeira podemos utilizalo só para
 * pega o valor  na segunda utilizmos para pegar o valor e o índice  ou seja pegamos o valor 
 * e a posição do valor que pode ser uma String ou um objeto.
 * Na terceira forma e chamando também o array na saida conforme os exemplos abaixo.
 
console.log('--------------------');
console.log('( forEach )');
/*nomes.forEach(function(valor){
    console.log(valor);
}
nomes.forEach(function(valor, índice ){
    console.log(valor, índice );
}
nomes.forEach(function(valor, índice , array){
    console.log(valor, índice , array);
});
*/

/**
 * Como utilizar um for em objeto 
 *a O for clássico não irar funcionar mas no caso do for in
 * ele vai funcionar e podemos pega a chave ou o valor da chave
 * conforme o exemplo abaixo.
 */ 

const pessoa = {
    nome: 'Luiz',
    sobreNome: 'Otávio'
};
for(let chave in pessoa){
    //console.log(chave);// Obtendo só as chaves
    console.log(chave, pessoa[chave]);// Ob tendo as chaves e o valores delas
}
/**
 * No for of não podemos realizar a iteração pois ele vai apresenta
 * um is not iterable.
 * 
 * Resumo da aula
 * For clássico - Geralmente com iteráveis (array ou String).
 * For in - Retorna o índice ou chave (String, array ou objetos). 
 * For of - Retorna o valor em si (iteráveis, array ou String)
 */




