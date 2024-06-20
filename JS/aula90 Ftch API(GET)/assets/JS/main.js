const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
    try{
  const href = el.getAttribute("href");
  const response = await fetch(href);

  if (response.status !== 200) throw new Error("ERRO 404!");

  const html = await response.text();

  carregaResultado(html);
    }
    catch(e){
console.log(e);
    }
}

// function carregaPagina(el) {
//   const href = el.getAttribute("href");

//   fetch(href)
//     .then((response) => {
//       if (response.status !== 200) throw new Error("ERRO 404!");
//       return response.text();
//     })
//     .then((html) => carregaResultado(html))
//     .catch((e) => console.log(e));
// }

//   async function carregaPagina(el) {
//     const href = el.getAttribute('href');

//     const objConfig = {
//       method: 'GET',
//       url: href
//     };

//     try {
//       const response = await request(objConfig);
//       carregaResultado(response);
//     } catch(e) {
//       console.log(e);
//     }
//   }

function carregaResultado(response) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = response;
}

//   fetch('pagina4.html')
//     .then(result => {
//         if(result.status !== 200) throw new Error('Erro 404 Nosso');
//         return result.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.log(e));

//     //.catch(e => console.error(e));// com o erro a saida do navegador é a mesma que a do exemplo abaixo porém ele fica na mesma cor e com o mesmo simbolo do navegador como que foi o navegador que lançou o erro.

//     // .catch(e => console.warn(e)); // com o warn a saida do navegador é (main.js:55 Error: Erro 404 Nosso). A mensagem que foi criada, mas antes da mensagem vem um sinal de aleta que é um triangulo com uma exclamação dentro.
