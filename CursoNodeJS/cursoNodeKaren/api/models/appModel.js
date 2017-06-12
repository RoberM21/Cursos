'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DogSchema = new Schema({
    name:{
        type: String,
        required: 'sin nombre'
    },
    birth_date: {
        type: Date

    },
    price: {
        type: String,
        default: '10.0'
    }
});

module.exports = mongoose.model('Dogs', DogSchema)