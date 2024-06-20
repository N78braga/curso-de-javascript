/**
 * Para realizar um escape de um texto entre duas aspas 
 * dentro de duas aspas basta só aplicar barra invertida
 * conforme o exemplo abaixo.
 * "\"texto"\" para aplicar no texto uma barra invertida 
 * aplica duas barra invertida conformo exemplo abaixo
 * "\\texto\"
 */
let umaString = "Um \"texto\""; // caracter de escape
console.log(umaString);
umaString = "um \\texto"; // usando um barra para ser imprimida na tela
console.log(umaString);

// As String são indexada conforme o exemplo abaixo
          // 01234567 
umaString = "Um texto";
console.log(umaString[4]); // Imprimindo um caracter que está no index 4 do texto que é a letra [e]
/**
 * Outra maneira de imprimir um caracter de uma determinada posição do texto é usando charAt()
 * mais a posição do caracter do texto segui o exemplo abaixo
 */
console.log(umaString.charAt(6)); // Imprimindo um caracter da posição 6 do texto usando o charAt()

// Formas de concatenar as String 
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// Forma de pesquisa em que index está o um determinado texto 
console.log(umaString.indexOf('texto'));// O nome texto começa no index 3
// Pecorrendo o texto de traz para frente no texto com lastIndexOf conforme o exemplo abaixo
console.log(umaString.lastIndexOf('m', 2)); 

// Usando a expressão regular para pecorre uma string conforme o exemplo abaixo
console.log(umaString.match(/[a-z]/g));// expressões regulares 
console.log(umaString.search(/x/)); // usando a expresssões regulares para localizar a posição do caracter
console.log(umaString.replace('Um', 'Outro')); // realizar a troca de uma palavra por outra
umaString = 'O rato roeu a roupa do rei de roma.';
console.log(umaString.replace(/r/g, '#')); // Usando a expressões regulares para realizar a troca de todo osqq r do texto

// verificando a tamanho do texto
console.log(umaString.length);

// recortando o texto 
console.log(umaString.slice(2, 6)); // recortando o texto e imprimindo a palavra que começa no index 2 até o 6
console.log(umaString.split(' ')); // Fateamdo o texto pelo os espaços 
console.log(umaString.toLocaleUpperCase());
console.log(umaString.toLocaleLowerCase())