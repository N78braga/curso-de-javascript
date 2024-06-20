

/**
 * Chamando a funçao mod atraves do require, que foi exportado pelo module.
 * exemplo:
   const n = require('./mod');
   console.log(n); // exibe o valor 2 que esta sendo exportado direto do mod atraves do exports.module
 */

/**
 * Chamando o a multiplicação da função
   const multiplicacao = require('./mod');
   console.log(multiplicacao(2, 2));
 */

   /**
    * Chamando a classe e o seu construtor do mod através do require 
    * const cachorro = require('./mod');
      const dog = new cachorro('Dog'); // instânciando a classe.

      O nome pode ser aplicado qualquer nome de variável porem, sempre tem que ser instanciado conforme o exemplo.
      const aaaa = new cachorro('dogão');

      dog.latir();
    */

   /**
    * Navegando entre arquivos que estão em outra pasta
    * Dentro do require o ponto esta indicando que estou na pasta principal que neste caso é a aula2Module2
    * exemplo: const cachorro = require('( . ) -> este aqui é a pasta principal/exemploA/exemploB/exemploC/mod');
    * 
    *  const cachorro = require('./exemploA/exemploB/exemploC/mod');
       const dog = new cachorro('Dog');
       dog.latir();
    */

//console.log(__filename); mostra o caminho do arquivo js -> c:\CursoJs\JS\node\aula2Modulo2\app.js
//console.log(__dirname); mostra o caminho da pasta -> c:\CursoJs\JS\node\aula2Modulo2

/**
 *Acessando o Arquivo Atraves do Path conforme o exemplo abaixo:
const path = require('path');
console.log(path.resolve(__dirname)); Mostrando o caminho da pasta -> c:\CursoJs\JS\node\aula2Modulo2
console.log(path.resolve(__filename)); Mostrando o caminho do arquivo -> c:\CursoJs\JS\node\aula2Modulo2\app.js

console.log(path.resolve(__dirname, '..', '..')); Fazendo o retorno de 2 diretorios da saido da pasta -> c:\CursoJs\JS\node\aula2Modulo2 e 
indo para a pasta -> c:\CursoJs\JS.

console.log(path.resolve(__dirname, '..', '..', 'arquivos')); Caminhando da pasta -> c:\CursoJs\JS E e indo desta pasta 
para a pasta arquivos -> c:\CursoJs\JS\arquivos.

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens')); Caminhando da pasta ->c:\CursoJs\JS\arquivos e indo desta pasta  
para a pasta imagens -> c:\CursoJs\JS\arquivos\imagens.

Quando é usado o Path o node vai vai resolver todo internamente para encontrar o caminho do arquivo. Isso é 
uma forma de manipular caminhos de arquivos e pastas da aplicação.
OBS: quando o arquivo não for um arqvio JS dentro do require tem que por o ponto mas a extenção do arquivo.
 */

 const Cachorro = require('./z/mod2');
   const dog = new Cachorro('Fala cachorro');
   dog.latir();
