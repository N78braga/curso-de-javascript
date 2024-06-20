// 705.484.450-52, 070.987.720-03
/*
Para realizar uma validação de CPF realiza-se uma conta regressiva 
de 10 digito conforme o exemplo abaixo ou seja 10 -> 9 -> 8 -> 7 até o ultimo digito
depois realizar a multiplicação deles conforme o exemplo com o resultado da multiplicação
realizammois a soma conforme o exemplo

7x  0x  5x  4x  8x  4x  4x  5x  0x
↓   ↓
10  9   8   7   6   5   4   3   2
↓   ↓
70  0  40  28  48  20  16  15   0 = 237 -> resultado da soma de todo os valores
11 - (237 % 11) = 5 (Primeiro digito)
O digito que vai sair do resultado for acima de 9 eleserá considerado 0

7x  0x  5x  4x  8x  4x  4x  5x  0x  5x
11  10  9   8   7   6   5   4   3   2
77  0  45  32  56  24  20  20   0  10 = 284
11 - (284 % 11) = 2 (segundo digito)

705.484.450-52 === 705.484.450-52

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
const arrayCpf = Array.from(cpfLimpo);

const somacpf = function(soma){
    let i = 0;
    for( i = Number(arrayCpf);i>0;i--){
        console.log(i);
    }
    return i;
};
somacpf(arrayCpf);
*/

function ValidaCPF(cpfvalidado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfvalidado.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;

    const cpfparcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.somaDigitos(cpfparcial);
    const digito2 = this.somaDigitos(cpfparcial + digito1);
    const novoCpf = cpfparcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCPF.prototype.somaDigitos = function (cpfparcial) {
    const arrayCpf = Array.from(cpfparcial);
    let regressivo = arrayCpf.length + 1;
    const total = arrayCpf.reduce((ac, val) => {
        // console.log(regressivo, val, regressivo * val);
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total%11);
    return digito > 9 ? '0' : String(digito);
};
ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return (sequencia === this.cpfLimpo); 
};

const cpf = new ValidaCPF('070.987.720-03');
// checando se o formulário e válido
if (cpf.valida()){
    console.log('Cpf válido');
}else{
    console.log('Cpf inválido');
}


