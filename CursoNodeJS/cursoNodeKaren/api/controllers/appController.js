'use strict';

const mongoose = require('mongoose');
const Dog = mongoose.model('Dogs');

exports.dogs_all = (req, res) => {
    Dog.find({}, (err, dog) => {
        if(err)
        res.send(ErrorCallback);
        res.json(dog);
    });
};

exports.dogs_new = (req, res) => {
    Dog.create(req.body, (err, dog) => {
        if(err)
        res.send(ErrorCallback);
        res.json(dog)
    })
}