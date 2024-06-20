/**
 *  Conhecendo uma método Splice 
 * O que é a método Splice e uma método que tem as caracteristica de quatro outros
 * métodos que são eles o que POP, PUSH, ANSHIFT e SHIFT. Pois o método Splice faz o que estes 
 * quatro método faz. 
 * 
 * Exemplo 
 *                  
 * nomes.Splice(indece elemento, delete, elemento1, elemento2, elemento3);
 * indice elemento 
 * No indice de elemento é informado a posição do elemento que será trabalhado ou alterado
 * exemplo 
 * 
 *                  0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * 
 * vamos trabalhar com o indece 1 então ficaria assim:
 * nomes.Splice( 1, delete, elemento1, elemento2, elemento3);
 * passamos a posição 1 que é o indice que queremos trabalha nele 
 * 
 * 
 * vamos determinar o que vamos fazer com este indice se é deletar ou acrescentar
 * um elemento ao array.
 * 
 *                   0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * nomes.Splice( 1, 2, elemento1, elemento2, elemento3);
 * Informamos aqui que no iremos ou acrescentar ou deletar dois elemento
 * 
 * 
 * Neste caso vamos remover dois elementos vamos remover o elemento Eduardo e o Gabriel
 *                   0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * nomes.Splice( 1, 2, 'Eduardo', 'Gabriel');
 * 
 */

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const adionar = nomes.splice(Number.MIN_VALUE, Number.MIN_VALUE, 'Luiz');
console.log(nomes, adionar);
/**
 * nomes.Splice(indece, delete, elemento1, elemento2, elemento3);
 * simulando a função pop que é remover o último indice ou elemento do array
 * nomes.splice(4, 1);  removendo um elemento do array
 * 
 *                    0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const removidos = nomes.splice(4, 1); pegando o elemento que foi removido 
 * console.log(nomes, removidos);
 * 
 * e atribuito a uma variável OBS: o retorno para variável é de um array
 * [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] o elemento que foi retornado da variável -> [ 'Júlia' ]
 * 
 * exemplo para fazer que seja removido do indice que foi passado até o final do array 
 * 
 *                    0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const removidos = nomes.splice(3, Number.MAX_VALUE);
 * console.log(nomes, removidos);
 *  Vai começa do indice que foi passado até o final do array
 * 
 * adicionando elemento ao array passa a posição do indice em que começa a ser adicionado
 * e passa a posição que vai recebe
 * 
 *                   0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const adionar = nomes.splice(3, 0, 'Luiz');
 * console.log(nomes, adicionar);
 * 
 * Removendo um elemento do array e depois no local do elemento que foi removido
 * adicionando um elemento
 * 
 *                   0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const adionar = nomes.splice(3, 1, 'Luiz');
 * console.log(nomes, adicionar);
 * 
 * Neste exemplo está informando que do indice 3 estou removendo o Gabriel e 
 * estou adicionando o Luiz no seu lugar.
 * 
 * Simúlando as funções pop, shift, anshift e o push
 *
 * simúlando o pop: 
 *                    0        1        2          3         4 
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const removidos = nomes.splice(-1, 1);
 * console.log(nomes, removidos);
 * 
 * [ 'Maria', 'João', 'Eduardo', 'Gabriel' ] o elemento que foi retirado do array ->  ['Júlia' ]
 * A saida é remoção do ultimo elemento do array que é a Júlia
 * 
 * simúlando shift:
 *                    0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const removidos = nomes.splice(0, 1);
 * console.log(nomes, removidos);
 * 
 * ['João', 'Eduardo', 'Gabriel', 'Júlia'] o elemento que foi retirado do array -> ['Maria']
 * A saida é remoção do primeiro elemento do array que é a Maria
 * 
 * simúlando o push:
 *                    0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const adionar = nomes.splice(Number.MAX_VALUE, 1, 'Luiz');
 * console.log(nomes, adicionar);
 * 
 * [ 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia', 'Luiz' ] []
 * Nesta saida observemos que o Luiz foi adicionado ao final do array e que o array
 * ainda ficou vazio podendo receber mas elemento.
 * 
 * simúlando o anshift:
 *                    0        1        2          3         4
 * const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
 * const adionar = nomes.splice(Number.MIN_VALUE, Number.MIN_VALUE, 'Luiz');
 * console.log(nomes, adionar);
 * 
 * [ 'Luiz', 'Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia' ] []
 * Nesta saida observemos que o Luiz foi adicionado no inicio do array e que o array
 * ainda ficou vazio podendo receber mas elemento.
 */



