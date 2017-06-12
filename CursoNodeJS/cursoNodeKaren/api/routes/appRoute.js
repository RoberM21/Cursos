module.exports = (app) => {
    var allController = require('../controllers/appController');

    app.route('/dogs')
        .get(allController.dogs_all)
        .post(allController.dogs_new);
    app.route('/dogs/:dogId')

    app.route('/')

}