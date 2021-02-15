const db = require('../db/init')
const mongoose = require('mongoose')
const connection = db

const sensorSchema = new mongoose.Schema({
    Building:{type:String, required:true},
    RoomId:{type:String, required:true},
    SensorId:{type:String, required:true},
    SensorType:{type:String, required:true}
})

const sensorModel = connection.model('sensors', sensorSchema)

module.exports = sensorModel