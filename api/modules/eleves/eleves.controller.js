const eleveService = require('./eleves.service');
module.exports.findAll = async (req, res) => {
    res.json(await eleveService.list());
}

module.exports.findOne = async (req, res) => {
    const id = req.params.id;
    const eleve = await eleveService.getOne(id)
    .catch(err => {
      res
      .status(500)
      .send({ message: "Error retrieving Eleve with id=" + id +"\n"+err });
    });
    if (!eleve)
      res.status(404).send({ message: "Not found Eleve with id " + id });
    else
      res.status(200).json(eleve);
}

module.exports.insertOne = async (req, res) => {
  const data = req.body;
  const eleve = await eleveService.insertOne(data)
  .catch(err => {
    res
    .status(500)
    .send({ message: "Error when inserting new Eleve\n"+err });
  });
    res.status(200).json(eleve);
}

module.exports.deleteOne = async (req, res) => {
    const id = req.params.id;
    const eleve = await eleveService.deleteOne(id)
    .catch(err => {
      res.status(500).send({
        message: "Error deleting Eleve with id=" + id+"\n"+err
      });
    });
    if (!eleve) {
      res.status(404).send({
        message: `Cannot delete Eleve with id=${id}. Maybe Eleve was not found!`
      });
    } else res.status(200).send({
        message: "Eleve was deleted successfully!"
      });
}

module.exports.update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const eleve = await eleveService.edit(id, body)
    .catch(err => {
      res.status(500).send({
        message: "Error updating Eleve with id=" + id+"\n"+err
      });
    });
    if (!eleve) {
      res.status(404).send({
        message: `Cannot update Eleve with id=${id}. Maybe Eleve was not found!`
      });
    } else res.status(200).json(eleve);
}