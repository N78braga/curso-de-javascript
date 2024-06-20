
// range que gera o número aleatório entre 1 segundo e 3 segundo
function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
// função de callbeck
function f1(callbeck){
    setTimeout(function(){
        console.log('f1');
        if(callbeck) callbeck();
    }, rand());
   
}
// função de callbeck
function f2(callbeck){
    setTimeout(function(){
        console.log('f2');
        if(callbeck) callbeck();
    }, rand());
}
  // função de callbeck
function f3(callbeck){
  setTimeout(function(){
    console.log('f3');
    if(callbeck) callbeck();
}, rand());
}
/**
 * Estrutura da função de callbeck
 * 
 * f1(function(){
 *     f2(function(){
 *          f3(function(){
 *              console.log('Olá mundo!');
 *          });
 *      });
 * });
 */

/**
 * Função de callbeck melhorada ou simplificada
 */
f1(f1Callbeck);
function f1Callbeck(){
    f2(f2Callbeck);
}  
function f2Callbeck(){
    f3(f3Callbeck);
}
function f3Callbeck(){
  
    console.log('Olá mundo!');
}
            
        
 


