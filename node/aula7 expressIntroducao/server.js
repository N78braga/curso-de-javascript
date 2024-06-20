
/**
 * Quando o cliente tenta acessar o site ele faz uma requisição http://meusite.com/ <- GET -> Entregue a página HTML
 * 
 *          Criar   ler   atualizar  deletar
 * CRUD -> CREATE, READ,   UPDATE,   DELETE
 * CREATE -> POST -> CADASTRAR OU ENVIAR DADOS
 * READ -> GET -> LER OU CONSULTAR
 * UPDATE -> PUT -> ATUALIZAR OU EDITAR DADOS
 * DELETE -> DELETE -> DELETAR OU EXCLUIR DADOS 
 */

const express = require('express');
const send = require('send');
const app = express();


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});
app.post('/', (req, res) => {
    res.send('Recebi o formulário');
});

app.get('/contato', (req, res) => {
    res,send('<b>Obrigado por entra em contato com a gente.</b>');
    
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Server running on port 3000');
});