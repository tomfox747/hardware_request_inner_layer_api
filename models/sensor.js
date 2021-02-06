const db = require('../db/init')

const {model, Schema} = db

const sensorSchema = new Schema({
    Building:{type:String, required:true},
    RoomId:{type:String, required:true},
    SensorId:{type:String, required:true},
    SensorType:{type:String, required:true}
})

const sensorModel = model('sensors', sensorSchema)

module.exports = sensorModel