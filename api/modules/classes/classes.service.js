const Classe = require('./classes.schema');
const EleveService= require('../eleves/eleves.service');
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
    return await this.getOne(id)
    .then(cl => {
        if(cl.eleves)
            cl.eleves.array.forEach(
                el => EleveService.deleteOne(el)
            );
        Classe.findByIdAndRemove(id);
    });
}

module.exports.edit = async (input, id) => {
    return await Classe.findByIdAndUpdate(id, input, {new: true});
}