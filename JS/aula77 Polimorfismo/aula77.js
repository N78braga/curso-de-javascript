// SuperClass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};
Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.consultarSaldo();
};
Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.consultarSaldo();
};
Conta.prototype.consultarSaldo = function () {
    console.log(`Ag/c ${this.agencia}/${this.conta} Saldo: R$ ${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limiteSaque){
    Conta.call(this, agencia, conta, saldo);
    this.limiteSaque = limiteSaque;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limiteSaque) < valor) {
        console.log(`Saldo insuficiente: ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.consultarSaldo();
};
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
   
};

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log('---------------------------');

const cp = new ContaPoupanca(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);

/**
 * Resumo este exemplo mostra como utilizar um polimorfismo de escrita,
 * E os seus comportamentos rescrevendo os métodos.
 */