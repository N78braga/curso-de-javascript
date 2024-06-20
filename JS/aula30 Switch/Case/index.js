/**
 * Como utilizar a Estrutura condicional Switch/Case e quando a utilizar
 */


// Criando uma função para eliminar a chamada do break
function getDayWeek(dayWeek) {
    let dayWeekText;
    switch (dayWeek) {
        case 0:
            return dayWeekText = 'Domingo';

        case 1:
            return dayWeekText = 'Segunda';

        case 2:
            return dayWeekText = 'Terça';

        case 3:
            return dayWeekText = 'Quarta';

        case 4:
            return dayWeekText = 'Quinta';

        case 5:
            return dayWeekText = 'Sexta';

        case 6:
            return dayWeekText = 'Sábado';

        default:
            return dayWeekText = 'dia da semana foi digitado errado'
    }

}
const data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = getDayWeek(diaSemana);
//getDayWeek(diaSemana);
console.log(diaSemana, diaSemanaTexto);