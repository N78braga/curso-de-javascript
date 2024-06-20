// //criando número randomicamente
// const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

// // randomisando os números da tabela ASCII para gerar uma letras.
// const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
// const geraminuscula = () => String.fromCharCode(rand(97, 123));
// const geraNumero = () => String.fromCharCode(rand(48, 58));
// // Criando uma variável que pega todos o simbolo especiais e randimificando.
// const simbolos = ',.;:/?|^~[]{}+=_-()*&¨%$#@!"><';
// const geraCaracters = () => simbolos[rand(0, simbolos.length)];

//  export default function geraSenhha(qtd, maisculas, minusculas, numeros, simbolos) {
//   const senhaArray = [];
//   qtd = Number(qtd);


//   for (let i = 0; i < qtd; i++) {
//     maisculas && senhaArray.push(geraMaiuscula());
//     minusculas && senhaArray.push(geraminuscula());
//     numeros && senhaArray.push(geraNumero());
//     simbolos && senhaArray.push(geraCaracters());
//   }
//   return senhaArray.join("").slice(0, qtd);
// }
 
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function geraSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
  const senhaArray = [];
  qtd = Number(qtd);

  for(let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(geraMaiuscula());
    minusculas && senhaArray.push(geraMinuscula());
    numeros && senhaArray.push(geraNumero());
    simbolos && senhaArray.push(geraSimbolo());
  }

  return senhaArray.join('').slice(0, qtd);
}
