/**
 * Trabalhando com os métodos estáticos e com métodos de instâncias
 */

// Criando uma Function e atribuindo dentro da classe
function teste(){
  console.log("Este é meu teste.");
}


class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste(); // chamando function dentro da classe
  }

  // Método de instância que é chamando quando é instânciado por uma variável
  aumentarVolume(){
    this.volume += 2;
  }

  // Método de instância que é chamando quando é instânciado por uma variável
  diminuirVolume(){
    this.volume -= 2;
  }

  //Criando um método estático dentro da classe 
  static trocaPilha(){
    console.log("OK, vou trocar.");
  }

  //Criando um método com paramentro estático dentro da classe 
  static soma(x, y){
    return x + y;
  }

}

const controle1 = new ControleRemoto("LG");
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// controle1.aumentarVolume();
// console.log(controle1);

// Chamando o método estático da clase
// ControleRemoto.trocaPilha();
// console.log(`A soma dos valores é ${ControleRemoto.soma(2, 4)}`);

/**
 * Resumo o método estático não precisa ser estânciado como uma class que é preciso 
 * ser estânciada com a palavra NEW e ter o maior cuidado com a palavra reservada THIS onde ela 
 * é chamada, si ele for chamada fora da classe, ela vai está se referênciado ao objeto global do node do 
 * javascript. E quanto o this for chamado dentro da classe ele está referênciando a propría classe
 * 
 */