const mongoose = require("mongoose");

const classeSchema = new mongoose.Schema({
    libelle: { type: String },
    eleves: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Eleve"
        }
      ]
    },
    { timestamps: true }
);

const model = mongoose.model(
    "Classe",
    classeSchema
);
module.exports = model;