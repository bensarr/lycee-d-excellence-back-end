module.exports = function(app) {
    const Ctrl = require('./classes.controller');

    app.route('/api/classes')
        .get(Ctrl.findAll)
        .post(Ctrl.insertOne);

    app.route('/api/classes/:id')
        .get(Ctrl.findOne)
        .put(Ctrl.update)
        .delete(Ctrl.deleteOne);
  };