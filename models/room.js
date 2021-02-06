const db = require('../db/init')

const { model, Schema } = db

const roomSchema = new Schema({
    Building:{type:String, required:true},
    RoomId:{type:String, required:true},
    Sensors:{type:String, required:true},
    CurrentPopulation:{type:String, required:true}
})

const roomModel = model('rooms', roomSchema);

module.exports = roomModel;