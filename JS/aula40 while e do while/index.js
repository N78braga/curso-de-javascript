/**
 * Aula de utilização do while e [do while]
 * Vamos verificar alguns exemplo abaixo
 *  
 */

 /*let controle = 0;
 while(controle <= 10){
    console.log(controle);
    controle ++;
 }*/

 function random(min, max){
   const aleatorio = Math.random() * (max - min) + min;
   return Math.floor(aleatorio);
 }

 const min = 1;
 const max = 20;
let rand = random(min, max);

/*while(rand !== 10){
   rand = random(min, max);
   console.log(rand);
}*/

do{
   rand = random(min, max);
   console.log(rand);
}while(rand !== 10);