/*
O código que foi sujerido pelo professor foi o seguinte.
Luiz Otávio Miranda tem 30 anos, pesa 84 Kg
tem 1.8 de altura e seu IMC é de 25.925925925
Luiz Otávio nasceu em 1980
*/ 

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso/(alturaEmM*alturaEmM);
anoNascimento = 2019 - idade;

// templete strings

console.log(`${nome} ${sobreNome} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`)


// Este código foi realizado por mim 
/*const nome = 'Ernando';
const sobreNome = 'Braga';
const idade = 45;
const peso = 86;
const alturaEmM = 1.78;

let indeceMassaCorporal = (Math.round(peso/(alturaEmM*alturaEmM)));
let anoNascimento = 2024 - idade;
console.log(`Oi meu nome é ${nome} ${sobreNome} tem idade anos peso ${peso} Kg tem ${alturaEmM} de altura`);// Usando o templete strings nas variáveis  
console.log('e seu IMC é de', indeceMassaCorporal, 'e nascir no ano de', anoNascimento);// Imprimindo na tela sem o templete strings */

