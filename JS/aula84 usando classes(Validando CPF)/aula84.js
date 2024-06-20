/**
 * // 705.484.450-52, 070.987.720-03
 *
 * Exemplo real de uso de classe utilizada para válidação de CPF
 *
 */
class ValidarCPF {
  constructor(recebendoCPF) {
    Object.defineProperty(this, "cpfLimpo", {
      writable: false,
      enumerable: false, // o enumerable é para aparecer o valor no console quando ele estive em true sa saida va ser ValidaCPF{cpfLimpo: "07098772003" }
      configurable: false,
      value: recebendoCPF.replace(/\D+/g, ""),
    });
  }

  eSequencia() {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
  }

  gerarNovoCpf() {
    const cpfparcial = this.cpfLimpo.slice(0, -2);
    const digito1 = ValidarCPF.gerarDigito(cpfparcial);// forma de chamar um método que é instânciado this.gerarDigito(cpfparcial);
    const digito2 = ValidarCPF.gerarDigito(cpfparcial + digito1);// forma de chamar um método que é instânciado this.gerarDigito(cpfparcial + digito1);
    this.novoCpf = cpfparcial + digito1 + digito2;
  }

  /*gerarDigito(cpfparcial) {// está forma de método é necessaria que seja estânciado
    let total = 0;
    let reverso = cpfparcial.length + 1;

    for (let numeroParcialCpf of cpfparcial) {
      total += reverso * Number(numeroParcialCpf);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }*/
  static gerarDigito(cpfparcial) {
    // está forma de método é necessaria que seja estânciado
    let total = 0;
    let reverso = cpfparcial.length + 1;

    for (let numeroParcialCpf of cpfparcial) {
      total += reverso * Number(numeroParcialCpf);
      reverso--;
    }
    const digito = 11 - (total % 11);
    return digito > 9 ? "0" : String(digito);
  }

  valida() {
    if (typeof this.cpfLimpo !== "string" || this.cpfLimpo.length !== 11)
      return false;
    if (!this.cpfLimpo) return false;
    if (this.eSequencia()) return false;
    this.gerarNovoCpf();
    return this.novoCpf === this.cpfLimpo;
  }
}
// let cpfvalidado = new ValidarCPF("070.987.720-03");
let cpfvalidado = new ValidarCPF("000.000.000-00");
if (cpfvalidado.valida()) {
  console.log("Cpf válido");
} else {
  console.log("Cpf inválido");
}
