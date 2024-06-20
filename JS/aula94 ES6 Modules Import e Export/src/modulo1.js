
/*
Esta é uma forma de realizar um export onde passamos as variáveis dentro do export

const name = "Ernando";
const lastName = "Braga";
const age = 45;

function sum(x, y){
    return x + y;
}

export{name as name2, lastName, age, sum};

Como foi visto que denttro do export a palavra chave [ as ] que esta sendo utilizada para renomear a variável
onde o name passa e ser chamada de name2 porque ela foi renomenada assim também podemos renomear class, function
e métodos. Dentro do modulo é permitido apenas um default segui o exemplo de como utilizar o default


*/

// Outra forma de realizaar o export e declarando p export já na própria variável corfome o exemplo abaixo
// export const name = "Ernando";
// export const lastName = "Braga";
// export const age = 45;

// export function sum(x, y){
//     return x + y;
// }

// export default function sum(x, y){
//     return x + y;
// }



// export class Pessoa {
//     constructor(name, lastName){
//         this.name = name;
//         this.lastName = lastName;
//     }
// }


/*
Para que uma constante seja default não sera posivel aplicar o default direto na constante
exemplo -> exoprt default name = "Ernando"; isso irár apresenta um erro.
Para que uma constante venha ser default a forma correnta é exemplo -> exeport{name as default},
com isso a constante name passara a ser default.
*/
const name = "Ernando";
const lastName = "Braga";
const age = 45;

function sum(x, y){
    return x + y;
}

export default (x, y) => x * y;

export{name, lastName, age, sum};