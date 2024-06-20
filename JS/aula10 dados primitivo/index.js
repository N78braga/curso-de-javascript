/**
 * Conhecendo os tipo de dados primitivos
 * 1 - String -> que é para texto
 * 2 - number -> que é para número
 * 3 - Undefine -> que não aponta para nenhum local da memória
 * 4 - boolean -> que mostra verdadeiro ou falso 
 * exemplos sobre os tipo e com cada um é usado abaixo.
 */

// exemplos de String
const nome = 'Luiz'; // String declarada com aspa simple 
const nome1 = "Luiz";// String declarada com aspa dupla
const nome2 = `Luiz`;// String declarada com crases

// exemplos de Number
const num = 10; // Number inteiro
const num1 = 10.52; // Number de ponto flutuante.

// exemplo de undefine
//let nomeAluno; // Undefine não aponta pra local nenhum na memória foi declarada mas não inicializada
let sobreNomeAluno = null; // Null -> não aponta pra local nenhum na memória

// exemplo de boolean que é um valor lógico
const aprovado = true; // Boolean true para verdeiro
const reprovado = false; // Boolean false para falso 

// verificando os tipo de cada variável
console.log(typeof(nome), nome);
console.log(typeof(nome1), nome1);
console.log(typeof(nome2), nome2);
console.log(typeof(num), num);
console.log(typeof(num1), num1);
console.log(typeof(sobreNomeAluno), sobreNomeAluno);
console.log(typeof(aprovado), aprovado);
console.log(typeof(reprovado), reprovado);