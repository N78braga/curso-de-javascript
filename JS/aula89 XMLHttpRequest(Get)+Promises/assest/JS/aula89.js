/**
 * O que é AJAX?
AJAX, acrônimo de Asynchronous JavaScript and XML, é uma técnica de desenvolvimento Web que permite a criação de aplicações mais interativas. Um dos principais objetivos é tornar as respostas das páginas Web mais rápidas pela troca de pequenas quantidades de informações com o servidor Web, nos bastidores.

Além disso, evita-se que a página Web inteira tenha que ser recarregada cada vez que alguma nova informação precisa ser consultada no servidor. Em geral, isso significa que páginas Web com recursos AJAX permitem maior interatividade, velocidade de processamento e usabilidade.
 */

// const request = (obj) => {
//   const xhr = new XMLHttpRequest();
//   // fazendo primeiro com a função de callback
//   xhr.open(obj.method, obj.url, true);
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText);
//     } else {
//       obj.error(xhr.statusText);
//     }
//   });
// }

  // passando uma função de callback e não um poste pois este é a forma an tiga de realizar está requisição
  // request({
  //   method: "GET",
  //   url: href,
  //   success(response) {
  //     carregaResultado(response);
  //   },
  //   error(errorText) {
  //     console.log(errorText);
  //   },
  // });

  // function carregaResultado(response) {
  //   const resultado = document.querySelector(".resultado");
  //   resultado.innerHTML = response;
  // }


  const request = obj => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url, true);// informando se a requisição vai ser assicrono ou sicrono para ser assicrono (true) e para ser sicrono (false)
      xhr.send();// ser for um poste dentro do parênteses do send colocaria os dados do formulario ou da requisição. Mas como estamos trabalhando só com o get não precisa passar nada dentro do parêntese pode deixar em branco ou passar Null
  
      xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
  };
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
      e.preventDefault();
      carregaPagina(el);
    }
  });
  
  async function carregaPagina(el) {
    const href = el.getAttribute('href');
  
    // Esta é a forma atual de realizar uma requisição de uma URL
    const objConfig = {
      method: 'GET',
      url: href
    };
  
    try {
      const response = await request(objConfig);
      carregaResultado(response);
    } catch(e) {
      console.log(e);
    }
  }
  
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }
  