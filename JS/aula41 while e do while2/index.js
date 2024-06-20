/**
 * Usando os controle break, continue dentro do while e do [do while]
 * o controle break e continue funciona em todas as estrutura de laço
 */
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*for(let numero of numeros){

   if(numero === 2){
       console.log('Pulei o número 2');
       continue;
   }
   if(numero === 5){
       continue;
   }
   console.log(numero);
   if(numero === 7){
       console.log('O número 7 foi encontrado estou saindo do loop.');
       break;
   }
}*/

let controle = 0;
/*while (controle < numeros.length) {
    
    let numero = numeros[controle];
    if (numero === 2) {
        console.log('Pulei o número 2');
        controle++;
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log('O número 7 foi encontrado estou saindo do loop.');
        controle++;
        break;
    }
    controle++;
}*/

do{
    let numero = numeros[controle];
    if (numero === 2) {
        console.log('Pulei o número 2');
        controle++;
        continue;
    }
    console.log(numero);
    if (numero === 7) {
        console.log('O número 7 foi encontrado estou saindo do loop.');
        controle++;
        break;
    }
    controle++;
}while (controle < numeros.length);

/**
 * Resumo da aula o continue sempre continuará para próxima iteração 
 * pulando o valor que foi posto na condição e continua  até terminar o loop. 
 * E enquanto a palavra braek que posta dentro da condição vai para o loop
 * quando for encontrado o valor que foi posto dentro da condição.
 * 
 */