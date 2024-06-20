/**
 * Conhecendo os operadores aritiméticos
 * adição -> + Este sinal é usado para soma e também é usado para realizar concatenação em console.log
 * subtração -> -
 * multiplicação -> *
 * divisão -> /
 * potenciação -> **
 * resto da divisão -> %
 */

// exemplo com adição
const num = 5;
const num1 = 10;
console.log(num + num1); // realizando uma soma
const num2 = '5';
console.log(num2 + num1); // realizando uma concatenção

// exemplo com subtração
console.log(num - num1);

// exemplo com multiplicação
console.log(num * num1);

// exemplo com divisão
console.log(num / num1);

// exemplo com potenciação
console.log(num ** num1);

// exemplo com resto da divisão / mode
console.log(num1 % num);

/**
 *  ordem de precedência
 * 1 - Parenteses -> ()
 * 2 - potenciação -> **
 * 3 - multiplicação -> *, divisão -> /, resto da divisão -> %
 * 4 - adição -> +, subtração -> -
 */
// exemplo de ordem de precendência
const n = 5;
const n1 = 2;
const n2 = 10;
console.log(n + n1 * n2); // primeiro realizar a multiplicação porque está sem precendência
console.log((n + n1) * n2); // primeiro realizar a adição porque está com a precedência ou seja dentro do parenteses

/**
 * Usando a encrementação
 * encrementando de 1 em 1 ou seja somando de 1 em 1 -> ++
 * encrementando na multiplicação -> **
 * decrementando -> --
 */
// exemplo de operadores de emcrementação
let nu = 5;
nu++;
console.log(nu);// encrementando número mais 1 e imprimi o valor 6
nu--;
nu--;
console.log(nu); // decrementando número menos 1 e imprimi o mesmo valor que é 5;

/**
 * Usando as operadores de  atribuições
 * adição e igual -> +=
 * subtração e igual -> -=
 * mutiplicação e igual *=
 * divisão e igual -> /=
 */
// exemplo de  de atribuição
let numero = 5;
numero += numero; // realizar atribuição que é somando ele com ele mesmo. 
console.log(numero); 
numero *= numero; // realizar atribuição que é multiplicando ele com ele mesmo. 
console.log(numero);
numero **= numero; // realizar atribuição que é elevando ele com ele mesmo. 
console.log(numero);
numero /= numero; // realizar atribuição que é dividindo ele com ele mesmo. 
console.log(numero);
numero -= numero; // realizar atribuição que é subtraindo ele com ele mesmo. 
console.log(numero);

 /**
  * passando uma string para número 
  * parseInt -> passar uma string para um número inteiro
  * parseFloat -> passar uma uma string para um número decimal
  * Pode chamar a classe Number sem passar os parseInte ou parseFloat
  * que ele vai passar sem problema algum conforme o exemplo abaixo.
  */
//exemplos
 const numer = 10;
 const numer1 = parseInt('5'); // passando uma string para número com parseInt e realizando a soma
 const numer2 = Number('5.2');
 console.log(numer + numer1);
 console.log(numer + numer2);