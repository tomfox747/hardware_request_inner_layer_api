const mongoose = require('mongoose')
const db = require('../db/init-hist')
const connection = db

const roomHistSchema = new mongoose.Schema({
    Building:{type:String, required:true},
    RoomId:{type:String, required:true},
    CurrentPopulation:{type:String, required:true},
    TimeStamp:{type:String, required:true}
}, { collection: 'roomdata' });

const roomHistModel = connection.model('roomdata', roomHistSchema)

module.exports = roomHistModel