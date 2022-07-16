const mongoose = require("mongoose");

const eleveSchema = new mongoose.Schema({
    nom: { type: String },
    prenom: { type: String },
    classe: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Classe"
     }
    },
    { timestamps: true }
);

const model = mongoose.model(
    "Eleve",
    eleveSchema
);
module.exports = model;