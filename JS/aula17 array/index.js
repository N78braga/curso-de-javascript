
// verificando o tamanho do array
const alunos = ['Luiz', 'Maria', 'João'];
console.log(alunos);
//console.log(alunos.length);

/*verificando um elemento de uma determinada posição no array
console.log(alunos[0]);*/

/* substituindo um valor do elemnto por outro no array
alunos[0] = 'Eduardo';
console.log(alunos);*/

/* adicionando um elemento no final do array
 alunos[3] = 'Luiza'; // adicionando um elemento passa a posição do array o mesmo irar aumentar o tamanho
 alunos[alunos.length] = 'Luiza'; // passando um elemento para o array através length
 alunos.push('Luiza'); // passando um elemento para o array atráves do método push
console.log(alunos);*/

/* adicinando um elemento no inicio do array
alunos.unshift('Luiza');// passando um elemento para o array atráves do método unshift
console.log(alunos);*/

/* removendo elementos do final do array
alunos.pop('Luiz');
console.log(alunos);*/

/* Salvando o elemento que foi removido do final do array e atribuindo em uma variável
const removido = alunos.pop();
console.log(`O elemento que foi removido do array foi o [${removido}].`);
console.log(`O array só contei os elemento [${alunos}].`); 
const recebendo = removido;*/

/*removendo elementos do inicio do array
alunos.shift();
console.log(alunos);*/

/* Salvando o elemento que foi removido do inicio do array e atribuindo em uma variável
const removido = alunos.shift();
console.log(`O elemento que foi removido do array foi o [${removido}].`);
console.log(`O array só contei os elemento [${alunos}].`); 
*/

/* Apagando um elemento de dentro do array passando uma posição do mesmo
delete alunos[1];
console.log(alunos); Obs: na psição do elemento que foi removido mostrarar a posição sem neum elemento <1 empty item>*/

// acessando uma posição de um elemneto que não existe porque o meu elemento só vai até 3. 
// console.log(alunos[10]); será imprimindo o valor padrão undefined

/* realizando um fateamento dos elemento de um array
alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0, 3)); // Pecorrendo os elemento do array do indece 0 até o a segunda posição do mesmo
console.log(alunos.slice(0, -1)); // Pecorrendo os elemento do array do inicio até 
o final menos 1 que é o ultimo elemento*/

/* verificando se a variável alunos que foi declara com array é uma instanceof
console.log(typeof alunos); // vai mostra que é um objeto.
console.log(alunos instanceof Array); // vai mostra true.*/