const fs = require("fs").promises;

//module.exports = (caminho) => fs.readFile(caminho, { encoding: "utf-8" });
module.exports = (caminho) => fs.readFile(caminho, "utf-8");