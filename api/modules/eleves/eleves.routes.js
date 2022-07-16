module.exports = function(app) {
    const Ctrl = require('./eleves.controller');

    app.route('/api/eleves')
        .get(Ctrl.findAll)
        .post(Ctrl.insertOne);

    app.route('/api/eleves/:id')
        .get(Ctrl.findOne)
        .put(Ctrl.update)
        .delete(Ctrl.deleteOne);
  };