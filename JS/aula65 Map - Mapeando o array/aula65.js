/**
 * Conhecendo a função Map
 * 
 * O que é a função Map
 * 
 * O método map() pertence ao conjunto de funções disponíveis no 
 * objeto array para facilitar a sua manipulação. Basicamente, 
 * ele faz a leitura de todos os elementos do array, executa 
 * uma função callback para cada um e devolve como retorno um novo array.
 * 
 * Além disso, caso existam objetos não definidos no conteúdo original, 
 * eles serão ignorados durante o loop de processamento. 
 * Ele funciona de forma semelhante ao método forEach(), 
 * que também percorre um array para executar uma função callback.
 * 
 * A principal diferença entre os dois métodos é que o map() devolve 
 * o resultado em um novo array, enquanto o forEach() apenas executa 
 * determinada função para cada elemento.
 * 
 * Dobre os números 
 * const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 * const valorDobrado = numeros.map(valor => valor * 2);
 * console.log(valorDobrado);
 * 
 *
 * 
 * Para cada elemento:
 * Retorne apenas uma String com o nome da pessoa
 * Retorne apenas a chave "nome" do objeto
 * Adicione uma chave id em cada objeto 
 *  const pessoas = [
 *  { nome: 'Luiz', idade: 62 },
 *  { nome: 'Maria', idade: 23 },
 *  { nome: 'Eduardo', idade: 55 },
 *  { nome: 'Letícia', idade: 19 },
 *  { nome: 'Rosana', idade: 32 },
 * { nome: 'Wallace', idade: 47 }
 * ];
 * 
 * const nomes = pessoas.map(obj => obj.nome);
 * console.log(nomes);
 * 
 * const idades = pessoas.map(obj => ({obj: obj.idade}));
 * console.log(idades);
 */
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
});
console.log(pessoas);
console.log();
console.log(comIds);
/**
 * const comIds = pessoas.map(function(obj, indice) {
 *   obj.id = (indice + 1) * 1000;
 *   return obj;
 * });
 * console.log(comIds);
 * 
 * Neste exemplo aqui ao ser criado o obj.id tanto o que foi criado quanto
 * o original foi modificado se o que você estiver desenvolvendo realmente precisa 
 * desta mudança tranquilo pode deixar deste jeito porém se não for utilizar este comportamento
 * então é só seguir o modelo acima que só quem será alterado vai ser só o novo objeto que foi criado
 */

