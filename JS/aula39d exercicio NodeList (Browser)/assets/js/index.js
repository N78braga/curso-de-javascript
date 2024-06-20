const paragrafos = document.querySelector('.paragrofos');
const ps = paragrafos.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body);
const backgraoundColorBory = estiloBody.backgroundColor;
//console.log(backgraoundColorBory);

for(let p of ps){
   p.style.backgroundColor = backgraoundColorBory;
   p.style.color = '#FFFFFF';
}