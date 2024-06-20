/**
 * Conhecendo os Getters e Setters
 * 
 * O que são Getters e Setters
 * É a forma de realizar um emcpsulamento que deixar o código 
 * protegido em um objeto. Para cada instância de variável, 
 * um método getter retorna seu valor, enquanto um método setter o define ou atualiza.
 * 
 * function Produto(nome, preco, estoque) {
 *      this.nome = nome;
 *      this.preco = preco;
 *      let estoquePrivado = estoque;
 *      Object.defineProperty(this, 'estoque', {
 *      enumerable: true, // mostra a chave que é estoque quando for true não mostra quando for fals        
 *      configurable: false, // apaga ou é configurável o atributo ou chave do objeto
 *      get: function() {
 *      return estoquePrivado;
 *      },
 *      set: function(valor) {
 *      if(typeof valor !== 'number'){
 *      throw new TypeError('O valor não é um número');
 *      }
 *      estoquePrivado = valor;
 *    },
 *  });
 * }
 * const p1 = new Produto('Camiseta', 20, 3);
 * p1.estoque = 500;
 * console.log(p1);
 * 
 * 
 * 
 * Criando uma função factory e encapsulando ela com Getters e Setters
 */
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', '');
            nome = valor;
        }
    };
}
const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);