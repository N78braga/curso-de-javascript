/**
 * Realizando comandos no node comandos basicos via termainal
 * 
 * Iniciando o NPM pelo terminal: npm init -y
 * 
 * Alterando a versão do NPM: npm i npm@latest -g
 * 
 * Instalando um pacote: npm install nome-do-pacote --save
 * 
 * Alterando a versão do pacote: npm install nome-do-pacote@versão --save
 * 
 * Instalando todos os pacotes: npm install --save
 * 
 * Removendo um pacote: npm uninstall nome-do-pacote --save
 * 
 * Removendo todos os pacotes: npm uninstall --save
 * 
 * Alterando o nome do pacote: npm uninstall nome-do-pacote --save && npm install nome-do-pacote --save
 * 
 * Incluindo denpendências no packege.json: npm install nome-do-pacote --save
 * 
 * 
 * Realaizando a instalação desinstalação e alteração de aplicações de terceiros
 * Para isso: npm install nome-do-pacote --save -> Exemplo: npm install express  --save -> será instalado a 
 * ultima versão do express no package.json. Para instalatar uma versão espercificar basta digita 
 * npm install nome-do-pacote@versão --save -> Exemplo: npm install express@5.0.0 --save
 * 
 * 
 * Movendo a denpendêcia para devDependencies: npm install nome-do-pacote --save-dev -> 
 * Exemplo: npm install express --save-dev Com isso ele vai ser movido para devDependencies.
 * 
 * Voltando o para denpendência: npm install nome-do-pacote --save-prod -> 
 * Exemplo: npm install express --save-prod
 * 
 * Desisnstalando a denpendência: npm uninstall nome-do-pacote --save -> 
 * Exemplo: npm uninstall express --save com isso sera excluido da dependencia.
 * 
 * Aplicando uma profundidade na dependência para não ser listado no comando LS do terminal: 
 * npm ls nome-do-pacote --depth=0 -> Exemplo: npm ls express --depth=0
 * 
 * Para verifica a profundidade de uma pasta só 
 */