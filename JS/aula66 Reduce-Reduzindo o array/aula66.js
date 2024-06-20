/**
 * Conhecendo o Reduce
 * O que é o reduce
 * 
 *  O método reduce() executa a função de callback uma vez 
 * para cada elemento presente no array, excluindo furos (valores indefinidos), 
 * recebendo quatro argumentos: acumulador - valor inicial 
 * (ou o valor do callback anterior), valorAtual - o valor do elemento atual.
 * 
 * 
 * Some todos os números (Reduce) o uso correto do Reduce
 * const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 * const total = numeros.reduce(function(acumulador, valor) {
 *     acumulador+=valor; 
 *     return acumulador;
 * }, 0);
 * Observer que o caumulador ele soma o valor com que esta sendo guardado a cada passada
 * ou seja na primeira passada o acumulador começa somando com que ele tem dentro que é o 0
 * acumulador vale -> 0, e é somado com o valor 5 do array depois ele guarda o valor 
 * acumulador vale -> 5, e é somado com o outro valor do array que é o 50
 * acumulador vale -> 55, e é somado com outro valor do array. Este procedimento
 * será execultado com todo os valores do array e ao final será apresentado a soma
 * de todo os valore que está dentro do array.
 * 
 * 
 * Retorne um array com os pares (Filter) Mas usando o (Reduce)
 * const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 * const total = numeros.reduce(function(acumulador, valor) {
 *     if(valor % 2 === 0) acumulador.push(valor);
 *     return acumulador;
 * }, []);
 * 
 * Neste exemplo onde usamos o reduce para filtra o array e depois retornar os valore pares 
 * vemos que o acumulador sempre está fazendo a iteração e guardando os valores que saõ pares
 * depois chamamos o acumulador e com o método push montamos outra vez o array
 * passando como parâmentro o valor pares que foi filtrado. Porém não é recomendado 
 * realizar o filter com o Reduce o correto e realizar o filtro como o Filter
 * 
 * Retorne um array com o dobro dos valores (Map) Mas usando o (Reduce)
 * const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 * const total = numeros.reduce(function (acumulador, valor) {
 * acumulador.push(valor * 2);
 * return acumulador;
 * }, []);
 * console.log(total);
 * 
 * 
 * Retorne a pessoa mais velha
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 }
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);