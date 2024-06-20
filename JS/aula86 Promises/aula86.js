/**
 * Uma promise é um objeto retornado por uma função assíncrona, que representa o estado atual da operação
 */

/**
 * Chamando as funções de callbacks que uma função dentro de outra conforme o exemplo abaixo
 * porem não é a melhor forma de fazer está chamada organizada
 * 
 * // função que cria número aleatorio
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random( ) * (max-min) + min);
}

function esperaAi(msg, tempo, cb){
    setTimeout(() => {// Esta função funcionar com o sleep do java
        console.log(msg);
        if(cb) cb();
    }, tempo);
}
 * 
 * esperaAi("Frase 1", rand(1, 3), function(){
 *    esperaAi("Frase 2", rand(1, 3), function(){
 *        esperaAi("Frase 3", rand(1, 3));
 *    });
 * });
 * 
 */

// função que cria número aleatorio
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  // chamando a construtor da Promise e passamos como paramêntro resolve e o reject que é os paramênto que a conversão usa
  return new Promise((resolve, reject) => {// Dentro da promise passamos uma função de callback
    //if(typeof msg !== "string") reject("BAD VALUE");
    if(typeof msg !== "string") reject(new Error("ERRO"));// Lansando um erro do javaScript

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}
esperaAi("Conexão com o BD", rand(1, 3))
.then(resposta => {// chamando o método resolve que está dentro do promise que dentro do seTimeout
    console.log(resposta);
    return esperaAi("Buscando dados da Base", rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
    // return esperaAi("Tratando os dados da Base", rand(1, 3));
    return esperaAi(22222, rand(1, 3));
})
.then(resposta => {
    console.log(resposta);
})
.then(() =>{
    console.log("Exibe dados na tela");
})
.catch(e =>{// Para Lembra que no catch sempre vai retornar um erro
    console.log("ERRO", e);
});

/**
 * Resumo: cria-se uma promise usando o construtor dela e passa dois paramêntro para ela
 * como a conversão usar o resolve e  o reject devemos usar também em nossos código
 * 
 */