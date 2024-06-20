/**
 * Conhecendo a Factory Functions + Prototypes e suas vantagens
 * 
 * 
 * Neste exemplo o método ainda está meio que acoplado 
 * 
 * function criaPessoa(nome, sobreNome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },
        comer() {
            console.log(`${this.nome} está comendo.`)
        },
        beber() {
            console.log(`${this.nome} está bebebndo.`)
        }
    };

    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobreNome: {value: sobreNome}
    });
};

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'Otávio');
console.log(p1);
console.log(p2);


Neste exemplo abaixor estamos desacoplando os métodos fazendo com que eles tenha de alguma forma 
uma pequena "independêcia"
 */


/**
 * Quando e realizado esté tipo de composição na programação ele é conhecido também como mixins
 * Mixins no Vue. js é uma maneira de compartilhar e reutilizar código entre componentes ou objetos. 
 * Eles são como blocos de código que podem ser "misturados" em diferentes componentes 
 * para adicionar funcionalidades específicas, Conforme o exemplo abaixo.
 */
const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};
const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} está bebebndo.`);
    },
};
const pessoaPrototype = Object.assign({}, falar, comer, beber);// está é uma forma de copiar os método para dentro do proto de pessoaPrototype
//const pessoaPrototype = {...falar, ...comer, ...beber};// está é uma forma de copiar os método para dentro do proto de pessoaPrototype
function criaPessoa(nome, sobreNome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobreNome: { value: sobreNome }
    });
};

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'Otávio');
console.log(p1);
console.log(p2);
