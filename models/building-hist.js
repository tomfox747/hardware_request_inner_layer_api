const mongoose = require('mongoose')
const db = require('../db/init-hist')
const connection = db

const buildingHistSchema = new mongoose.Schema({
    Id:{type:String, required:true},
    CurrentPopulation: { type: String, required: true  },
    TimeStamp:{type:String, required:true}
}, { collection: 'buildingdata' });

const buildingHistModel = connection.model('buildingdata', buildingHistSchema)

module.exports = buildingHistModel