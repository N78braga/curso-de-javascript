/**
 * Revisando Objetos 
 * 
 * Como que é declarada uma String literal -> '', "", `` usando as aspas  e as crases
 * é a forma de declara uma String literal.
 * 
 * Para declara um objeto literal tem que utilizar as {} que dentro 
 * vai os atrubutos com os valores porém no javaScript os atributos também é 
 * conhecido como chave exemplo vomas criar um objeto com os atributos
 * const pessoa = {
 *     nome: 'Luiz',
 *     sobreNome: 'Otávio'
 * };
 * console.log(pessoa.nome);
 * 
 * Observe que foi criado um objeto e dentro do objeto foi criado os atributos nome, sobreNOme que 
 * são conhecido como chave e depois os valores da chaves que é Luiz e Otávio.
 * podemos observar que cada chaves ou atributos e separa por virgula
 * e as chaves literal do objeto termina com o ponto e virgula informando o final do objeto
 * 
 * Forma de acessar o objeto
 * console.log(pessoa); // acessando todo os valores do objeto
 * console.log(pessoa.nome); // acessando o valor do atributo ou da chave nome
 * console.log(pessoa.sobreNome); // acessando o valor do atributo ou da chave sobreNome
 * 
 * Outra forma de acessar o objeto é por cochetes 
 * console.log(pessoa['nome']); // acessando o valor do atributo ou da chave nome
 * console.log(pessoa['sobreNome']); // acessando o valor do atributo ou da chave sobreNome
 * 
 * Neste caso para acessar o objeto com cochetes tem que por as aspa dentro do cochetes 
 * e depois o nome do atributo ou da chave conforme o exemplo acima.
 * A anotação de cochetes ela é utilizadom quando for preciso que o atributo ou chave 
 * venha ser alocada dinamicamente conforme o exemplo.
 * 
 * const pessoa = {
 *     nome: 'Luiz',
 *     sobreNome: 'Otávio'
 * };
 * const chave = 'nome';
 * console.log(pessoa[chave]);
 * 
 * Neste caso podemos observar que o atributo ou chave do objeto está sendo atribuido a uma variável
 * depois a variável esta sendo passada dentro do objeto que está chamando o atributo ou chave nome
 * 
 * 
 * Utilizando o construtor do objeto que cria um novo array
 * utilizando o new Array() pode ser usado as chaves ou os cochetes que vai ser 
 * criado um novo array de qualquer forma.;
 * 
 * const pessoa1 = new Object();
 * pessoa1.nome = 'Luiz';
 * pessoa1.sobreNome = 'Otávio';
 * console.log(pessoa1);
 * 
 * como apagar uma chave ou atributo de um objeto 
 * delete pessoa1.nome;
 * É só passar o delete como o objeto e a chave que vai ser apagada
 * e isso pode ser tanto com ponto quanto com os cochetes.
 * 
 * podemos criar métodos do objetos que é o comportamento que o objeto tem
 * 
 * const pessoa1 = new Object();
 * pessoa1.nome = 'Luiz';
 * pessoa1.sobreNome = 'Otávio';
 * pessoa1.falrNome = function() {
 * console.log(`${this.nome} está falando o seu nome.`);
 * };
 * 
 * Como podemos ver mas uma vez foi criado um método do objeto 
 * que faz que mostre a saida informando que Luiz que pertence ao atributo nome 
 * informe que ele está falando -> Luiz está falando o seu nome
 * observemos que para ter acesso ao atributo ou chave do objeto usamos a palavra resevada THIS
 * que esta referênciando que esta sendo chamado o atributo do objeto.
 * 
 * pessoa1.getDataNascimento = function() {
 *     const dataAtual = new Date();
 *     return dataAtual.getFullYear() - this.idade;
 * };
 * 
 * Verificando as chave do objeto
 * for(let chave in pessoa1){
 * console.log(chave);
 * }
 * 
 * Acessando os valores da chave
 * for(let chave in pessoa1){
 * console.log(pessoa1[chave]);
 * }
 * 
 * Podemos ter dois tipo de funções que são moldes que é usados para criar objetos
 * E quais são os tipos de funções que cria molde 
 * São Factory functions e o Constructor functions que é conhecido como 
 * padrão de projeto
 * 
 * function criaPessoa(nome, sobreNome){
 *     return{
 *         nome,
 *         sobreNome,
 *         get nomeComleto(){
 *              return `${this.nome} ${this.sobreNome}`;
 *         }
 *     };
 * }
 * const p1 = criaPessoa('João', 'Otávio');
 * console.log(p1.nomeComleto);
 * 
 * Como podemos observa quando utilizamos o get no console não passamos 
 * o parentes no método conforme o console.log acima
 * poré quando não e utilizado o get no console.log acrestamos os parentes
 * console.log(p1.nomeCompleto());
 * 
 * também podemos ter varios comportamento dentro do método
 * ou seja podemos ter métodos dentro de métodos,
 * essa e a Factory functions.
 * 
 * Como realizar o travamento do objeto 
 * 
 * function Pessoa(nome, sobreNome){
 *   this.nome = nome;
 *   this.sobreNome = sobreNome;
 *   Object.freeze(this);
 * }
 * const p1 = new Pessoa('Luiz', 'Otávio'); 
 * console.log(p1);
 * 
 * O método freeze trava o objeto e não e alterado nada que pertence o objeto
 * o freeze funciona com array e qualquer outro método.
 */
function Pessoa(nome, sobreNome){
   this.nome = nome;
   this.sobreNome = sobreNome;
}
const p1 = new Pessoa('Luiz', 'Otávio'); 
// Object.freeze(p1); // Este método trava o objeto neste caso está travando o p1
console.log(p1);