const fs = require("fs").promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: "w" }); // com o flag 'a' ele adiciona o conteudo no arquivo
    
  //fs.writeFile(caminhoArquivo, json, { flag: "w" }); // // com o flag 'w' ele sobrescreve o arquivo
  // fs.writeFile(caminhoArquivo, json, {flag: 'a'});// com o flag 'a' ele adiciona o conteudo no arquivo

  //fs.writeFile(caminhoArquivo, 'Frase 1 \n ', {flag: 'w'}); // com o flag 'w' ele sobrescreve o arquivo
  //fs.writeFile(caminhoArquivo, 'Frase 1 \n ', {flag: 'a'}); // com o flag 'a' ele adiciona o conteudo no arquivo
};
