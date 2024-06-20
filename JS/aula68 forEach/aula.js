/**
 * Conhecendo o forEach
 * O que é forEach
 * O método que perminti válida, por permitir iterar de forma simples 
 * e direta sobre os elementos de uma coleção (array ou um objeto). 
 * Usar o `forEach`, portanto, torna desnecessária a preocupação com 
 * índices ou chaves, tornando a sintaxe mais limpa e fácil de entender.
 * O forEach só é utilizado dentro de array.
 * 
 * Simulado o reduce com o forEach
 * const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
 * let total = 0;
 * a1.forEach(valor => total += valor);
 * console.log(total);
 * 
 */
const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;
a1.forEach(valor => total += valor);
console.log(total);

/**
 * Usando o for (of)
 * const a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 * for(let valor of a1){
 *   console.log(valor);
 * }
 */


