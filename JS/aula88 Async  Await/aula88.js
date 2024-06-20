/**
 * Forma de melhora o código com Async e com Await só passando o código com
 * o promise ele fica deste jeito conforme o exemplo abaixo
 * 
 * // função que cria número aleatorio
function rand(min = 0, max = 3) {
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

  esperaAi("Fase 1", rand())
  .then(valor => {
    console.log(valor);
    return esperaAi("Fase 2", rand());
  })
  .then(fase => {
    console.log(fase);
    return esperaAi("Fase 3", rand());
  })
  .then(fase => {
    console.log(fase);
  })
  .catch(e => console.log(e));



  // E quando usamos o Async ele vai fica deste jeito

 */

// função que cria número aleatorio
function rand(min = 0, max = 3) {
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

async function executa() {
  //O async permitirá que seja usado um Await dentro da função
  try {
    // //tornando uma promise pendente
    //  const fase1 = esperaAi("Fase 1", rand());
    // console.log(fase1);
    // // // Tirnado uma uma promise da pendência usando o setTimeout
    // // setTimeout(function(){
    // //   console.log("Essa promise estava pendente", fase1);
    // // }, 1100);

    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);

    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);

    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();

/**
 * As promises elas tem três estados
 *
 * 1° Pending -> pendente
 * fullfilled -> resolvida
 * rejected -> rejeitada
 */
