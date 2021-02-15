const db = require('../db/init')
const mongoose = require('mongoose')
const connection = db

const roomSchema = new mongoose.Schema({
    Building:{type:String, required:true},
    RoomId:{type:String, required:true},
    Sensors:{type:String, required:true},
    CurrentPopulation:{type:String, required:true}
})

const roomModel = connection.model('rooms', roomSchema);

module.exports = roomModel;