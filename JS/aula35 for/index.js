/**
 * Aula de for estrutura clássica de repetição
 */
/*for(let i =0; i <= 5; i++){// realizando uma incrementação normal
    console.log(`Linha ${i}`);
}*/
/*for(let i =0; i <= 100; i+=10){// realizando uma incrementação pulando de 10 em 10
    console.log(`Linha ${i}`);
}*/

/*for(let i = 100; i >= 0; i--){// realizando uma decrementação normal
    console.log(`Linha ${i}`);
}*/

/**
 * realizando uma degrementação pulando 10 em 10
 * primeiro a variável [ i ] recebe o valor máximo
 * depois verifica a condição se i é maior ou igual a o valor 
 * que é menor que a variável [ i ] depois vai decrementando 1 ou o valor 
 * que foi sólicidado para se decrementado no caso do exemplo abaixo foi 10
 * então ele vai decrementa de 10 em 10
 * 
 * for(let i = 100; i >= 0; i-= 10){
 * console.log(`Linha ${i}`);
 * }
 */

/*let cont = 0;
for(let i = 0; i < 10; i++){
    if (i % 2 == 0){
        cont = i;
        console.log(`O número ${cont} é par`);
    } else if(i % 2 != 0){
        cont = i;
        console.log(`O número ${cont} é impar`);
    }
   
}*/

const frutas = ['Maçã', 'Pêra', 'Uva', 'Banana']
for(let i = 0; i < frutas.length; i++){
    console.log(`Índece ${i+1}:  ${frutas[i]}`);
}
/**
 * Obs: Quando Você esta passando o [ i ] como indece da frutas você está chamando
 * ou está acessando a posição dos elemento que está dentro do array porque o [i]
 * está recebendo uma incrementação do [i++] e como o i = 0 como a incrementação
 * ele passa a ser i = 0, i = 1, i = 2 e i = 3 que por sua vez está acessando a posição
 * 0, 1, 2 e 3 do array por isso que foi passado frutas[i].
 */
