const classeService = require('./classes.service');
module.exports.findAll = async (req, res) => {
    res.json(await classeService.list());
}

module.exports.findOne = async (req, res) => {
    const id = req.params.id;
    const classe = await classeService.getOne(id)
    .catch(err => {
      res
      .status(500)
      .send({ message: "Error retrieving CLasse with id=" + id +"\n"+err });
    });
    if (!classe)
      res.status(404).send({ message: "Not found Classe with id " + id });
    else
      res.status(200).json(classe);
}

module.exports.insertOne = async (req, res) => {
  const data = req.body;
  const classe = await classeService.insertOne(data)
  .catch(err => {
    res
    .status(500)
    .send({ message: "Error when inserting new Classe\n"+err });
  });
    res.status(200).json(classe);
}

module.exports.deleteOne = async (req, res) => {
    const id = req.params.id;
    const classe = await classeService.deleteOne(id)
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Classe with id=" + id+"\n"+err
      });
    });
    if (!classe) {
      res.status(404).send({
        message: `Cannot delete Classe with id=${id}. Maybe Classe was not found!`
      });
    } else res.status(200).send({
        message: "Classe was deleted successfully!"
      });
}

module.exports.update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const classe = await classeService.edit(id, body)
    .catch(err => {
      res.status(500).send({
        message: "Error updating Classe with id=" + id+"\n"+err
      });
    });
    if (!classe) {
      res.status(404).send({
        message: `Cannot update Classe with id=${id}. Maybe Classe was not found!`
      });
    } else res.status(200).json(classe);
}