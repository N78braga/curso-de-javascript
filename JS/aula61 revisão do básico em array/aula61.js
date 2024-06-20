/**
 * Conhecendo mas sobre oarray sabe-se que um array é dados que é passado por referência. 
 * E vamos nos aprofundando o conhecimento sobre ele usando o construtor para criar array,
 * funções e objetos etc.
 * 
 * Usando construtor para criar array
 * const nomes = new Array('Eduardo', 'Maria', 'Joana');
 * nomes[2] = 'João';
 * delete nomes[2];
 * console.log(nomes);
 * 
 * este tipo de array não é muito utilizado raramente veremos um array sendo utilizado deste tipo
 * 
 * // Passando uma String para uma array 
 * 
 * const nome = 'Luiz, Otávio, Miranda'; 
 * //const nomeArray = nome.split(' ');// Passando uma String para uma array atráves dos espaços 
 * const nomeArray = nome.split(',');// Passando uma String para uma array atráves das virgula 
 * console.log(nomeArray)
 * 
 * 
 * Passado um array para String 
 * 
 * const nomes = ['Luiz', 'Otávio', 'Miranda'];
 * const nome = nomes.join(' ');
 * console.log(nome);
 */

const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);

