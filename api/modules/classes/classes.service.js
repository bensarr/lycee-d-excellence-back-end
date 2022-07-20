const Classe = require('./classes.schema');
module.exports.list = async () => {
    return await Classe.find();
}

module.exports.getOne = async (id) => {
    return await Classe.findById(id);
}

module.exports.insertOne = async (input) => {
    return await Classe.create(input);
}

module.exports.deleteOne = async (id) => {
    return await Classe.findByIdAndRemove(id);
}

module.exports.edit = async (id, input) => {
    return await Classe.findByIdAndUpdate(id, input, { new: true });
}