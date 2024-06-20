/**
 * Função construtora constroi -> Objetos
 * Função fabrica -> Objetos
 * 
 * Obs: na versão construtora sempre tem que inicializada com letras maisculas
 * exemplo Pessoa porque ela será instâciada com a palavra resevada (new) conforme 
 * exemplo abaixo.
 * 
 * function Pessoa(nome, sobreNome){
 * this.nome = nome;
 * this.sobreNome = sobreNome;
 * }
 * const p1 = new Pessoa('Ernando', 'Braga');
 * const p2 = new Pessoa('João', 'Miguel');
 * 
 * Para utilizar ou ter acesso tanto aos atributo quanto aos métodos
 * fora da função construtora tem que utilizar da palavra this
 * porque se não for utilizada a palavra this o atributo ou o método
 * passa a ser atributos ou métodos  públicos
 *  só vai está disponivel dentro do construtor.
 * 
 * function Pessoa(nome, sobreNome){
 * const ID = 123456; // só será acessado internamente sendo privado
 * const metodoInterno = function(){ // só será acessado internamente sendo privado
 * 
 * };
 * 
 * 
 *  this.nome = nome; // atributo públicos
 * this.sobreNome = sobreNome;// atributo públicos
 * }
 * 
 * this.metodo = function(){ // método público
 * console.log(this.nome + ': sou um método');
 * };
 * 
 * // acessando os atributo e os métodos públicos
 * const p1 = new Pessoa('Ernando', 'Braga');
 * const p2 = new Pessoa('João', 'Miguel');
 * console.log(p1.nome);
 * console.log(p2.nome);
 * p1.metodo();
 */
function Pessoa(nome, sobreNome){
    this.nome = nome;
    this.sobreNome = sobreNome;

    this.metodo = function(){ // método público
        console.log(this.nome + ': sou um método');
         };
}
const p1 = new Pessoa('Ernando', 'Braga');
const p2 = new Pessoa('João', 'Miguel');
p1.metodo();