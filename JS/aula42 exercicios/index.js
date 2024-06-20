/**
 * 1° Exercicio 
 * Escreva uma função que recebe 2 números e retorne o maior deles
 * 
 *( Usando o (arrow function) conforme o exemplo abaixo )
 *  const max2 = (x, y) => x > y ? x : y;
 * console.log(max2(10, 5));
 * 
 * 
 *( Usando a função Math.max para pegar o maior valor )
 * function maiorValor(primeiroValor, segundoValor){
 *  return Math.max(primeiroValor, segundoValor);
 * }
 * const maior = maiorValor(154, 78);
 * console.log(maior);
 */
console.log('1° - Exercicio o maior número');
console.log('---------------------');
const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));
console.log();


/**
 * 2° Exercicio
 * Escreva uma função chamada ePaisagem que recebe dois argumentos,
 * largura e altura de uma imagem(number).
 * Retorne true se a imagem estiver no modo paisagem.
 */
console.log('2° - Exercicio a imagem é uma paisagem');
console.log('---------------------');
const ePaisagem = (largura, altura) => largura >= altura;
console.log(ePaisagem(800, 600));
console.log();

/**
 * 3° Exercicio
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função números de 0 a 100
 * 
 */
console.log('3° - Exercicio se é divisível por 3 ou por 5 ou pelo os dois');
console.log('---------------------');

function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}
for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}


/*
Fazendo como arrow function
const fizzBuzz = (numero) => typeof numero !== 'number'
? (numero)
: numero % 3 === 0 && numero % 5 === 0 
? ('FizzBuzz') 
: numero % 3 === 0 
? ('Fizz') 
: numero % 5 === 0 
? ('Buzz') 
: !numero % 3 === 0 && !numero % 5=== 0 ? numero : ('');

console.log('a', fizzBuzz('a'));
 for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}
*/
  


