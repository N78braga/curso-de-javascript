/**
 * Conhecendo a herança com classe
 */

class DispositivoEletronico {
  constructor(name) {
    this.name = name;
    this.connected = false;// ligado
  }

  connect() { // ligar
    if (this.connected) {
      console.log(`${this.name} já está ligado`);
      return;
    }
    this.connected = true;
  }

  SwitchOff() { // desligar
    if (!this.connected) {
      console.log(`${this.name} já está desligado`);
      return;
    }
    this.connected = false;
  }
}

class Smartphone extends DispositivoEletronico{
    constructor(name, color, model){
        super(name);
        this.color = color;
        this.model = model;

    }
}

// Exemplo de como extender outra classe 
class Tablet extends DispositivoEletronico{
    constructor(nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
// sobre escrevendo o método de outra classe ou criando novos métodos

    connect(){ // este método foi criado só para classe Tablet
        console.log("Olha, você alterou o m´todo ligar.");
    }
    falaOi(){ // este método foi criado só para classe Tablet
      console.log("Oi");
      
    }
}

const aparelho = new Smartphone("Samsumg", "Preto", "Galaxa S10");
console.log(aparelho);

const tablet = new Tablet("iped", true);



