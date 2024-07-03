exports.paginaInicial = (req, res) => {
  // Esta forma chama o HTML que esta dentro da pasta views
  res.render("index");

  // Esta forma chama o HTML que esta dentro  da mesma pasta ou seja no mesmo arquyivo que esta dentro do send
  //   res.send(`
  //        <form action="/" method="POST">
  //        Nome do Cliente: <input type="text" name="qualquercoisa"><br>
  //        Outro campo: <input type="text" name="qualquercoisa"></input>
  //        <button>Enviar</button>
  //        </form>
  //        `);
};

exports.trataPost = (req, res) => {
  res.send("Ei, sou nocva rota de post.");
};
