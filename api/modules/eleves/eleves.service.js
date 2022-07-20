const Eleve = require('./eleves.schema');
module.exports.list = async () => {
    return await Eleve.find().populate('classe');
}

module.exports.getOne = async (id) => {
    return await Eleve.findById(id).populate('classe');
}

module.exports.insertOne = async (input) => {
    return await Eleve.create(input);
}

module.exports.deleteOne = async (id) => {
    return await Eleve.findByIdAndRemove(id);
}

module.exports.deleteMany = async (idClasse) => {
    return await Eleve.deleteMany({classe: idClasse});
}

module.exports.edit = async (id, input) => {
    return await Eleve.findByIdAndUpdate(id, input, {new: true});
}