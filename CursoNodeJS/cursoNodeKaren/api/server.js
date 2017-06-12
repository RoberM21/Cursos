const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongosee = require('mongoose'),
    Dog = require('./models/appModel'),
    bodyParser = require('body-parser');

    mongosee.Promise = global.Promise;
    mongosee.connect('mongodb://localhost/API');

    app.listen(port);
    console.log('Servidor en el puerto: '+ port);

    app.use(bodyParser.urlencoded({ extended: true}));
    app.use(bodyParser.json());

    const routes = require('./routes/appRoute');
    routes(app)