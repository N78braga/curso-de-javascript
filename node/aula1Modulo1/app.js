// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// // const falaNome= require('./mod1').falaNome;
// // console.log(falaNome());

// // const mod1 = require('./mod1');
// // const falaNome = mod1.falaNome;
// // console.log(falaNome());

// const {nome, lastName, falaNome} = require('./mod1');
// console.log(nome, lastName);
// console.log(falaNome());

// const path = require('path');
// const axios = require('axios');
// const {Pessoa} = require('./mod1');

// const p1 = new Pessoa('Pedro', 'Miranda');
// console.log(p1);

const path = require('path');
const axios = require('axios');
const {Pessoa} = require('./mod1');

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
.then(response => console.log(response.data))
.catch(err => console.log(err));