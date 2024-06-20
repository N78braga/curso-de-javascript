/**
 * Concatenando Array
 * como realaizar a concatenação dos array
 */

/**
 * Primeira maneira de realizar a concatenação de dois array
 * usando o concat()
 * const array1 = [1, 2, 3];
 * const array2 = [4, 5, 6];
 * const array3 = array1.concat(array2,[7, 8, 9]);
 * console.log(array3);
 * 
 * Segunda maneira de realizar a concatenação de dois array
 * É usando o spread operator [...] que são este três pontinhos
 *  que no spread operator que significa espalhar ele tanto funciona como 
 * ...rest operator que funcionar com o resto dos parâmentro como spread oprator
 * 
 * const array1 = [1, 2, 3];
 * const array2 = [4, 5, 6];
 * const array3 = [...array1, ...array2];
 * console.log(array3);
 * 
 * No spread operator também podemos atribuit elemento ao meio do array conforme o exemplo
 * const array3 = [...array1, 'Luiz', ...array2];
 * outro exemplo
 * const array3 = [...array1, ...array2, ...[7, 8, 9]];
 * console.log(array3);
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2, ...[7, 8, 9]];
console.log(array3);