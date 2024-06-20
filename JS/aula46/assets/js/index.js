function relogio() {
    function criaTimer(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaTimer(segundos);
        }, 1000);
    }

    /*iniciar.addEventListener('click', function(event){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();   
    });
    pausar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.classList.add('pausado');
    });
    zerar.addEventListener('click', function(event){
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.add('zerado');
    });*/

    //Refaturando o código e eleminando as repetições do addEventListener
    document.addEventListener('click', function (event) {
        const elemento = event.target;

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }
        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    });
}
relogio();




