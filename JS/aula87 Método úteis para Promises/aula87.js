/**
 * Novos Métodos que são utilizado dentro da promises
 * Promise.all, promise.race, Promise.resolve e o Promise.reject
 *
 * No Promise.all recebe um Array
 */

// função que cria número aleatorio
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // dentro do setTimeout é aplicado a estrutura do código conforme abaixo
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

function baixaPagina(){
   //const emCache = true; // quando a pagina está em cache
    const emCache = false; //quando a página não está em cache 
    if(emCache){
        return Promise.resolve("Página em cache");
    }else{
        return esperaAi("Baixei a página", 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e));

/**
   * No Promise.all recebe um Array conforme o exemplo abaixo
   * 
  //   const promise = [
  //     "Primeiro valor",
  //     esperaAi("Promise 1", 3000),
  //     esperaAi("Promise 2", 500),
  //     esperaAi("Promise 3", 1000),
  //     esperaAi(1000, 1000),
  //     "Outro valor"
  //   ];
  
  //   Promise.all(promise)// passando uma função em vez de uma waerofunctio
  //     .then(function(valor){
  //         console.log(valor);
  //     })
  //     .catch(function(erro){
  //         console.log(erro);
  //     });
   */

/**
 * No Promise.race ele sempre vai retorna o primeiro valor que estive no Promise
 * cornforme o exemplo abaixo
 * 
 * const promise = [
  //     esperaAi("Promise 1", 3000),
  //     esperaAi("Promise 2", 500),// como esta promise tem o menor tempo para ser resolvido ela que vai ser a primeira a ser resolvida.
  //     esperaAi("Promise 3", 1000),
  esperaAi(1000, rand(1, 5)),
  esperaAi("Promise 1", rand(1, 5)),
  esperaAi("Promise 2", rand(1, 5)),
  esperaAi("Promise 3", rand(1, 5)),
];
Promise.race(promise) // No re
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

 */
