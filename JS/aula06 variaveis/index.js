
let nome;// Declarou a variavél mas não inicio
nome = 'João'; // Innicializando a variável que foi declarada
console.log(nome);
nome = 'Otávio';
console.log(nome);

/*console.log(nome, 'nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015. ');
console.log('O filho de', nome,  'se chama Eduardo. ');*/

// Não pode criar variável com palavra reservadas conforme o exemplo abaixo.
// let let = 'Paula'; a palavra let ela é resevada e o javaScript vai aprersenta um erro.

// Variável precisam ter nomes significativos conforme abaixo.
let n = 'João'; // a variável n não esta definindo nada e está dificio a compreensão.
let nomeCliente = 'Paulo'; // variável significatica pois etá definido que o nome é do cliente.

console.log(nomeCliente);

// Não pode começar o nome de uma variável com um número conforme  o exemplo abaixo.
// let 1nome;

// Não pode conter espaços ou traços conforme o exemplo abaixo
// let nome-Cliente; 
// let nome Cliente;

// Para nome compostos e utilizado o padrão camelCasse conforme o exemplo abixo
let nomeCompleto = 'João Braz';
console.log(nomeCompleto);

// O javaScript ele é case-sensitive ou seja ele faz a diferênça entre letra amiscula e minuscula conforme o exemplo abaixo
let NomeCliente1 = 'Maria';
let nomeCliente1 = 'Paulo';
console.log(NomeCliente1);
console.log(nomeCliente1);

// Não podemos redeclara variável com let.
// Não utilizer o var, só utilizer o let.