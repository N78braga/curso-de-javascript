/**
 * Tratamento de exeções
 * O que é uma exeção
 * E lançando um erro e tratamento as exeções de erro conforme o exemplo abaixo
 * 
 * console.log(naoExisto);
 * 
 * [Running] node "c:\CursoJs\JS\aula43\index.js"
 * c:\CursoJs\JS\aula43\index.js:6 <-> Mostrando a linha onde aconteceu o erro
 * console.log(naoExisto); <-> Mostrando o pon to exato onde ocorreu o erro
 *             ^
 * 
 * ReferenceError: naoExisto is not defined <-> Mostrando a referência do erro
 * // E abaixo está mostrando o speak treyce do erro
 *     at Object.<anonymous> (c:\CursoJs\JS\aula43\index.js:6:13)
 *     at Module._compile (node:internal/modules/cjs/loader:1376:14)
 *     at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
 *     at Module.load (node:internal/modules/cjs/loader:1207:32)
 *     at Module._load (node:internal/modules/cjs/loader:1023:12)
 *     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
 *     at node:internal/main/run_main_module:28:49
 * 
 * Node.js v20.11.1
 * 
 * [Done] exited with code=1 in 0.705 seconds
 * 
 * Corregindo o erro que foi gerado conforme o exemplo acima 
 * usando para correnção o blocos TRY e o CATCH conforme o exemplo abaixo.
 * 
 * try{
 *      console.log(naoExisto);
 * }catch(erro){
 *       console.log('Variável naoExisto não existe.');
 * }
 * 
 * 
 * Lançando erro para ajudar na melhoria do código e que ajudará na manuteção
 * do mesmo e que vai facilitar outro companheiro quando for trabalhar no código
 * conforme o exemplo asseguir
 * 
 */


function soma(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
       // throw('x e y precisam ser valores númericos.'); <-> Lançando um erro
       throw new ReferenceError('x e y precisam ser valores númericos.');// capiturando um erro

    }
    return x + y;
}

// caso não for lançado num erro o bloco try irá ser executado sem problema 
//Caso não se ouver um problema quem será ser executado vai ser o bloco catch exibindo o erro
try{
    console.log(soma(1, 2));
    //console.log(soma('1', 2)); 
}catch(error){
   // console.log(error);
   console.log('Foi digitado um caracter inválido.');
}

