/**
 * Conhecendo as funções que estão realicionada com as atributo ou chave do objeto
 * 
 */

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave que é estoque quando for true não mostra quando for false
        value: estoque, // mostra o valor da chave que é 3
        writable: false,// não permite que seja alterado o valor da chave quando for false e altera  quando for true
        configurable: false // apaga ou é configurável o atributo ou chave do objeto
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave que é estoque quando for true não mostra quando for false
            value: nome, // mostra o valor da chave que é 3
            writable: false,// não permite que seja alterado o valor da chave quando for false e altera  quando for true
            configurable: false // apaga ou é configurável o atributo ou chave do objeto
        },
        preco: {
            enumerable: true, // mostra a chave que é estoque quando for true não mostra quando for false
            value: preco, // mostra o valor da chave que é 3
            writable: false,// não permite que seja alterado o valor da chave quando for false e altera  quando for true
            configurable: false // apaga ou é configurável o atributo ou chave do objeto
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);