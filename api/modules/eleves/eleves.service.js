const Eleve = require('./eleves.schema');
module.exports.list = async () => {
    return await Eleve.find();
}

module.exports.getOne = async (id) => {
    return await Eleve.findById(id);
}

module.exports.insertOne = async (input) => {
    return await Eleve.create(input);
}

module.exports.deleteOne = async (id) => {
    return await Eleve.findByIdAndRemove(id);
}

module.exports.edit = async (input, id) => {
    return await Eleve.findByIdAndUpdate(id, input, {new: true});
}