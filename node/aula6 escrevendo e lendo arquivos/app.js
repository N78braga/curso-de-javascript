const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');// caminho absoluto para o arquivo que vou escrever e ler
//const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');// caminho absoluto para o arquivo que vou escrever e ler
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoa = [
//     {nome: 'Pedro'},
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Joaquim'},
// ];

// const json = JSON.stringify(pessoa, '', 2);// transformando o objeto de string para JSON
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
    const dados = await ler(caminho);
     redenrizaDados(dados);
    
}

function redenrizaDados(dados){
    dados = JSON.parse(dados);// transformando o JSON para objeto
    dados.forEach(valor => console.log(valor.nome));// imprimindo o nome de cada objeto
}
leArquivo(caminhoArquivo);
// const dadosArquivo = leArquivo(caminhoArquivo)
// .then(dados => console.log(dados))
// .catch(e => console.log(e));
