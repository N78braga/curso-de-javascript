// Não podemos criar constantes com palavra reservadas
// const const = 'Paula'; a palavra const ela é resevada e o javaScript vai aprersenta um erro.

// Constantes precisam ter nomes significativos
const n = 'João'; // a variável n não esta definindo nada e está dificio a compreensão.
const nomeCliente = 'Paulo'; // variável significatica pois etá definido que o nome é do cliente.
console.log(nomeCliente);

// Não pode começar o nome de uma constante com um número
// const 1nome;

// Não podem conter espaços ou traços 
// const nome-Cliente; 
// const nome Cliente;

// utilizamos camelCase
const nomeCompleto = 'João Braz'; // A variável está no padrão camelCase
console.log(nomeCompleto);

// Case-senitive
const NomeCliente1 = 'Maria';
const nomeCliente1 = 'Paulo';
console.log(NomeCliente1);
console.log(nomeCliente1);

// Não pode modificar o valor de uma constante conforme o exemplo abaixo
const nome = 'Juca';
// nome = 'Paulo'; apresenta um erro;
console.log(nome);

// Não utilize VAR, utilize const.


// Indentificando o tipo da variável
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultadoDuplicado * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log(typeof(primeiroNumero)); //verificando o tipo da variável

