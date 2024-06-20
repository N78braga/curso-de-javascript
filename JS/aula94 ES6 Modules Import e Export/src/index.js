/*
 Realizando a importação de uma function, variável ou class que é default
 conforme o exemplo.

 import soma from "./modulo1.js";
console.log(soma(5,8));
*/
 import multiplica, {name, lastName, age, sum} from "./modulo1.js";
console.log(multiplica(6, 5));
console.log(name, lastName, age, sum(4, 5));

// import name from "./modulo1";
// console.log(name);

/*
Quando realizamos a importação do default não presisa de chave apenas declaramos o nome da variável
quew neste caso é qualquerName que é uma function default será exportada conforme o exmplo assima.
*/

//Realizando o import de todo de uma vez conforme o exempo abaixo
// import * as MeuModulo from "./modulo1.js"
// console.log(MeuModulo);



//import {name, lastName, age, sum as soma, Pessoa} from "./modulo1.js"; 

// console.log(name, lastName, age);
// console.log(soma(5, 4));
// const pessoa = new Pessoa("Maria", "Fernando");
// console.log(pessoa);
