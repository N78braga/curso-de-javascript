/**
 * Realizando uma combinação com filter, Reduce e com Map
 * 
 * Retorne a soma do dobro de todos os pares
 * -> Usando o Filtrar pares 
 * -> Usando o Map para Dobrar os valores 
 * -> Reduzir (somar tudo) 
 * 
 * const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 * const numeroPares = numeros
 *   .filter(valor => valor % 2 === 0)
 *   .map(valor => valor * 2)
 *   .reduce((acumulador, valor) => acumulador + valor);
 * console.log(numeroPares);
 * 
 * como foi visto as saida de cada um dele foi conforme descrito abaixo
 * 
 * No Filter a saidas dos pares foi -> [ 50, 80, 2, 8, 22 ]
 * Dobrando os valores com Map a saida foi -> [ 100, 160, 4, 16, 44 ]
 * Reduzindo os valores usando o reduce para somar todo os valores pares a saida é -> 324
 */
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroPares = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((acumulador, valor) => acumulador + valor);
console.log(numeroPares);