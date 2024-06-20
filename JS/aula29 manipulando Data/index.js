/**
 * Trabalhando com datas e usando o objeto Date do javaScript
 * Date é uma função construtora ou seja você constroi aparti dela
 * conforme o exemplos abaixo
 */

/*const tresHoras = 60 * 60 * 3 * 1000;
const umDia = 60 * 60 * 24 *1000;
//const data = new Date(0); // Timestamp unix ou época unix
const data = new Date(0 + umDia);
console.log(data.toString());*/

// Passando dia mês e a hora para dentro da variável conforme o exemplo abaixo

/*                    ano,  mês, dia, horas, minutos, segundos, milesimo de segundos 
const data = new Date(2019,  3,  20,   15,     14,      27,            500);*/

/**
 * o formado de trabalha com horas mas utilizado em javaScript 
 * é passando uma String e o próprio javaScript realiza o parse para Number
 * const data = new Date('2019-04-20 20:20:59');// passando a horas sem utilizar o T dando espaço entre a data e a hora 
console.log(data.toString());
const dataT = new Date('2019-04-20T20:20:59');// passando a horas utilizar o T entre a data e a hora  
console.log(dataT.toString());
 */
/*const data = new Date();
console.log('Dia', data.getDate()); // Obtendo dia atual 
console.log('Mês', data.getMonth() + 1); // Obtendo Mês atual obs: o mês começa no 0
console.log('ano', data.getFullYear()); // Obtendo ano atual
console.log('hora', data.getHours()); // Obtendo hora atual
console.log('minitos', data.getMinutes()); // Obtendo minutos atual
console.log('segundos', data.getSeconds()); // Obtendo segundo atual
console.log('milesegundo', data.getMilliseconds()); // Obtendo milesegundo atual
console.log('Dia semana', data.getDay()); // Obtendo número do dia da semana atual obs: o domingo e 0, e o sabádo é 6
console.log(data.toString());*/

// Criando uma função para formata data
function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());  
    const mes = zeroAEsquerda(data.getMonth() + 1); 
    const ano = zeroAEsquerda(data.getFullYear()); 
    const hora = zeroAEsquerda(data.getHours()); 
    const minuto = zeroAEsquerda(data.getMinutes()); 
    const segundo = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
formataData(data);
const dataBrasil = formataData(data);
console.log(dataBrasil);


