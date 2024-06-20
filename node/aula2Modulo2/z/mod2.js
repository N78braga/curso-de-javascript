 /**
 * Acessando o modulo que está em outra pasta e chamando um modulo
 * dentro do require e só digita dois ponto o primeiro ponto é pra 
 * sair do arquivo atual que no caso é mod2 o segundo ponto é pra 
 * informa que eu quero entra no outro modulo e depois é só passar
 * o caminho em que está o modulo que será acessado, ou seja cada dois ponto 
 * e uma barra estou retrocedendo um caminho.
 * 
 * exemplo: const Cachorro = require('../'); saido da pasta z entrando na pasta exemploA.
 *
 * const Cachorro = require('../../);saido do arquivo aula2Modulo2 e acessando 
 *          outro caminho anivel do Node que esta dentro do projeto.
 *  
 * const Cachorro = require('../exemploA/exemploB/exemploC/mod');
module.exports = Cachorro;
 */
const Cachorro = require('../exemploA/exemploB/exemploC/mod');
module.exports = Cachorro;