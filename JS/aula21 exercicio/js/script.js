function meuScopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`


    }

    form.addEventListener('submit', recebeEventoForm);
}
meuScopo();

/* Este é um exemplo de como previnir que a pagina do 
   navegador seja atualizado conforme o esta escrito abaixo
    form.onsubmit = function(evento){
        evento.preventDefault();
    };*/
