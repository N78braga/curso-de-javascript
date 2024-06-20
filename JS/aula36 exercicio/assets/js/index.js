const elementos = [
    { tag: 'p', texto: ' O que é programação ' },
    { tag: 'div', texto: ' O que é algoritmo ' },
    { tag: 'footer', texto: ' Porque programar ' },
    { tag: 'section', texto: ' Aprendendo a lógica da programação' },
];

const container = document.querySelector('.container');
const div = document.createElement('div');// criando uma DIV

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];// realizando a atrinuição via destruturação
    let tagP = document.createElement(tag);// criando uma TAG
   // tagP.innerHTML = texto; // atribuindo ao HTML o texto que está dentro do elementos
   tagP.innerHTML = texto;// Criando um inner texto para html
  // let textoTagP = document.createTextNode(texto);//Criando nó de texto ou um node de texto
    div.appendChild(tagP);// atribuindo dentro da DIV a TAG
   // tagP.appendChild(textoTagP);
    //div.appendChild(textoTagP);
}
container.appendChild(div);// atribuindo a DIV dentro do container