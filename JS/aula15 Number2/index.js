// Conhecendo o objeto Math

let num1 = 9.545678;
let num2 = Math.floor(num1); // irá arrendodar o valor para baixo.
console.log(num2);

num2 = Math.ceil(num1); // irá arredonda o valor para cima
console.log(num2);

// formatando um número 
console.log(num1.toFixed(2));// formatando para 2 casa decimal

/**
 * Arredonda o valor OBS(se o valor estiver com a casa decimal após ou igual 50 irá arredonda pra cima
 * menor que 50 ou seja 49 irá arredonda para baixo )
 */
num2 = Math.round(num1);// Arredonda de forma automática
console.log(num2);

// Imprimindo o maio valor conforme o exemplo abixo
let num3 = Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6);// pegando o maior valor da variável
console.log('este é o maior valor: ' + num3);

num3 = Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6); // pegando o menor valor da variável
console.log('Este é o menor valor: ' + num3);

const aleatorio = Math.random(); // gerando um valor aleatorio
console.log(aleatorio);

/**
 * tornando um valor aleatorio em números inteiro sem as casa decimal
 * e determinando um valor limite
 */
const aleatorios = Math.round(Math.random() * (10 - 5) + 5);// Realizando a contagem de 5 até 10
console.log(aleatorios);

console.log(Math.PI);// chamando o objeto PI

console.log(Math.pow(2, 10)); // Realizando a potênciação 
console.log(2 ** 10);// Outra forma de Realizando a potênciação