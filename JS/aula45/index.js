/**
 * Funções que estão disponivel no navegador com nodejs
 * que é utilizada para controla time e é muito util
 * seguir um exemplo abaixo
 */

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

function funcaoDoIntervalo() {
    console.log(mostraHora());
}
// Esta função é executada de intervalo e intervalo simulando um contador de um relógio
const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

// Esta função só executada uma unica vez que é realizar uma parada da função
const parandoTime = setTimeout(function () {
    clearInterval(timer);
}, 3000);

// Usando outro setTimeout com uma function para exibir uma mensagem na tela
setTimeout(function(){
    console.log('Olá mindo!')
}, 5000);
