const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required:true},
    descricao: String
});

const HomrModel = mongoose.model("Home", HomeSchema);

module.exports = HomrModel;