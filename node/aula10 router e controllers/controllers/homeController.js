exports.paginaInicial = (req, res) =>{
  res.send(`
       <form action="/" method="POST">
       Nome do Cliente: <input type="text" name="qualquercoisa">
       Outro campo: <input type="text" name="qualquercoisa"></input>
       <button>Enviar</button>
       </form>
       `);
};

exports.trataPost = (req, res) => {
  res.send('Ei, sou nocva rota de post.');
}
