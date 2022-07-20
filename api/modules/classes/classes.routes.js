const Ctrl = require('./classes.controller');
module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });
    app.route('/api/classes')
        .get(Ctrl.findAll)
        .post(Ctrl.insertOne);

    app.route('/api/classes/:id')
        .get(Ctrl.findOne)
        .put(Ctrl.update,)
        .delete(Ctrl.deleteOne);
};