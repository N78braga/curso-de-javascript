/**
 * O objeto Map é uma estrutura de dados presente na linguagem JavaScript que permite armazenar pares de chave-valor
 * ou seja no Map trabalhamos com uma chave e o seu respectivo valor conforme os exemplo asseguir.
 *
 *
 * const pessoas = [
 *  {id: 3, nome: 'Luiz'},
 *  {id: 2, nome: 'Maria'},
 *  {id: 1, nome: 'helena'},
 * ];
 * Primeira forma de realizer um descontructor das chaves
 *
 * const novasPessoas = {};
 * for(const {id, nome} of pessoas){// realizando um descontructor de objeto
 *     console.log(id, nome);
 * }
 *
 *
 * Segunda forma de realizer um descontructor das chaves
 *
 * const novasPessoas = {};
 * for(const pessoa of pessoas){
 * const {id} = pessoa; // realizando um descontructor de objeto
 * novasPessoas[id] = {...pessoa};
 * }
 * console.log(novasPessoas);
 *
 *
 *
 * ( Realizando descontructor com a função Map e trabalhando com à função )
 *
 * const novasPessoas = new Map();
 * for(const pessoa of pessoas){
 * const {id} = pessoa; // realizando um descontructor de objeto
 * novasPessoas[id] = {...pessoa};
 * }
 * console.log(novasPessoas);
 *
 *
 * Para obter um valor da chave do Map é só chamar o get exemplo
 * sera criado uma variável e a variável vai receber o valor da chave 2
 * ou pode ser imprimido na tela do console
 *
 * const dadosDaPessoa = novasPessoas.get(2); na variável
 * console.log(novasPessoas.get(2)); no console
 *
 *
 *
 * realizando a iteração com Map
 *
 * const pessoas = [
 *     {id: 3, nome: 'Luiz'},
 *     {id: 2, nome: 'Maria'},
 *     {id: 1, nome: 'helena'},
 * ];
 *
 * const novasPessoas = new Map();
 * for(const pessoa of pessoas){
 *     const {id} = pessoa;
 *     novasPessoas.set(id, {...pessoa});
 * }
 *
 * retornando um Array das chaves do Map
 * for(const pessoa of novasPessoas){
 *     console.log(pessoa);
 * }
 * saida do array
 * [ 3, { id: 3, nome: 'Luiz' } ]
 * [ 2, { id: 2, nome: 'Maria' } ]
 * [ 1, { id: 1, nome: 'helena' } ]
 *
 *
 *
 * trabalhando só com o id do Map
 *
 * const pessoas = [
 *     {id: 3, nome: 'Luiz'},
 *     {id: 2, nome: 'Maria'},
 *     {id: 1, nome: 'helena'},
 * ];
 *
 * const novasPessoas = new Map();
 * for(const pessoa of pessoas){
 *     const {id} = pessoa;
 *     novasPessoas.set(id, {...pessoa});
 * }
 *
 * retornando só o id das chaves do Map
 * for(const[] of novasPessoas){
 *     console.log(pessoa);
 * }
 *
 *
 * Este maneira é muito usado no Python e que é conforme o exemplo abaixo
 *
 * for(const [identifier, {id, nome}] of novasPessoas){// primeiro declara uma variável dentro da cochetes no caso identifier
 *  console.log(identifier);// imprimindo no console o identifier
 *  console.log(identifier, id, nome);// imprimindo no console o identifier, id e o nome
 * }
 *
 * Porem esta meneira de utilizar  o for não e correto pois não muito utiliazado no javaScript
 * a maneira mais utilizado non javascript é4 está
 *
 *
 * Para pegar só as chaves do Map é só chama o Keys conforme o exemplo abaixo
 *
 * for(const pessoa of novasPessoas.keys()){
 *  console.log(pessoa);
 * }
 * saida 3 2 1
 *
 * Como também podemos utilizar os valores conforme o exemplo abaixo
 *
 * * for(const pessoa of novasPessoas.value()){
 *  console.log(pessoa);
 * }
 * saida  { id: 3, nome: 'Luiz' }
 *        { id: 2, nome: 'Maria' }
 *        { id: 1, nome: 'helena' }
 *
 * Realizando um Crude que deleta uma chave do Map
 *
 * novasPessoas.delete(2);
 * console.log(pessoas);
 */

const pessoas = [
  { id: 3, nome: "Luiz" },
  { id: 2, nome: "Maria" },
  { id: 1, nome: "helena" },
];

const novasPessoas = new Map();
for (const pessoa of pessoas) {
  const { id } = pessoa; // realizando um descontructor de objeto
  novasPessoas.set(id, { ...pessoa });
}

//for(const pessoa of novasPessoas.values()){
//   console.log(pessoa);
//}
novasPessoas.delete(2);
console.log(novasPessoas);
