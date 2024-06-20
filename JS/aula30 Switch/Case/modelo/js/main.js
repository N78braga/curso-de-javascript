/**
 * Captura o evento do submit do formulário
 */

const form = document.querySelector('#formulario');

// imprimindo na laanding page a mensagem da função 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso) {
        setResultadoIMC('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultadoIMC('altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);
    const indeceImc = getIndeceCorporal(imc);
    const msg = `Seu IMC é ${imc} (${indeceImc})`;

   setResultadoIMC(msg, true);
});

function getIndeceCorporal(imc) {
    const indece = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return indece[5];
    if (imc >= 34.9) return indece[4];
    if (imc >= 29.9) return indece[3];
    if (imc >= 24.9) return indece[2];
    if (imc >= 18.5) return indece[1];
    if (imc < 18.5) return indece[0];
}

function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);

}

function criandoParagrafo() {
    const paragrafo = document.createElement('paragrafo');
    return paragrafo;



}

function setResultadoIMC(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ''; // enviando a mensagem para landing Page
    
    const paragrafo = criandoParagrafo();
    if(isValid){
        paragrafo.classList.add('paragrafoResultado'); // criando uma class no html apartir do javaScript
    }else{
        paragrafo.classList.add('paragrafoBad');
    }
    paragrafo.innerHTML = msg;
    resultado.appendChild(paragrafo);

}