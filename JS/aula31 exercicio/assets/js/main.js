/*const h1 = document.querySelector('.container h1');
const data = new Date();

function getDayWeek(dayWeek) {
    const dayWeekText = ['domingo', 'segunda - feira', 'terça - feira', 
    'quarta - feira', 'quinta - feira', 'sexta - feira', 'sábado'];
    return dayWeekText[dayWeek];
   
}
function getNameMonth(numberMonth) {
    const nomeMes = ['janeiro', 'fevereiro', 'março', 'abril', 'maior', 'junho', 
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'desembro'];
    return nomeMes[numberMonth];
    
}

// Criando uma função para formata data
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDayWeek(diaSemana);
    const nomeMes = getNameMonth(numeroMes);
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
        `  ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}:${zeroAEsquerda(data.getSeconds())}`);
}
h1.innerHTML = criaData(data);*/

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full'});