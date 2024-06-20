// Mostrando como criar e function com objetos para criar um objeto é usado as {} 
/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
sole.log(pessoa1.nome);*/

// criando uma function e dentro da function criando um objeto confome o exemplo abaixo
/*function criaPessoa (nome, sobreNome, idade){
    return {
        nome: nome,
        sobreNome: sobreNome,
        idade: idade
    };
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Paulo', 'Santos', 55);
const pessoa3 = criaPessoa('Maria', 'Clara', 45);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);*/

// Outra maneira de declara um objeto
/*function criaPessoa (nome, sobreNome, idade){
    return {nome, sobreNome, idade};
}
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Paulo', 'Santos', 55);
const pessoa3 = criaPessoa('Maria', 'Clara', 45);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);*/

// Criando uma função dentro do objeto ou seja criando um método conforme o exemplo abaixo
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
    // criando um método dentro da função
    /*fala() {
        console.log('Ola Mundo!');

    }*/
    // Usando a palavra this dentro do objeto conforme o exemplo abaixo
    fala() {
       // console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
       console.log(`A minha idade atual é ${this.idade}.`);

    }, 

    incrementaIdade(){
    this.idade ++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();