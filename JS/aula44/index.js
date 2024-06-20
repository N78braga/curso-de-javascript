/**
 * Continuação dos tratamen to de erro e como utilizar os 
 * blocos try e catch
 */

/*try{// É executa quando não há erros
    console.log(a);
   console.log('Abrir um arquivo');
   console.log('Manipulando o arquivo e gerou erro');
   console.log('Fechando o arquivo');
} catch(erro){// É executada quando há erros
    console.log('Tratando o erro');       
}finally{// É executada sempre ser ouver ou não erro
    console.log('FINALLY: Eu sempre sou executado');
}*/

/**
 * Trabalhando com o try catch aninhado conforme o exemplo abaixo
 * 
 * try{
 *  console.log('Abrir um arquivo');
 * console.log('Manipulando o arquivo e gerou erro');
 * console.log('Fechando o arquivo');
 * 
 * try{
 * console.log(b);
 * }catch(e){
 * console.log('Deu erro aqui');
 * }finally{
 * console.log('Também sou finally.');
 *  }
 * } catch(erro){
 *  console.log('Tratando o erro'); 
 * }finally{
 * console.log('FINALLY: Eu sempre sou executado');
 * }
 */

function retonaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instâcia de Date.');
    }

    if(!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try{
    const data = new Date('01-01-1970  12:58:12');
    const hora = retonaHora(data);
    console.log(hora);
}catch(e){
   // tratar erro 
}finally{
    console.log('Tenha um bom dia.');
}

















