const buildingModel = require('../models/building');
const roomModel = require('../models/room');
const sensorModel = require('../models/sensor');
const {getError} = require('../utilities/errorHandler');
const fileName = 'data_post_service';

const Post_building_data = async (building) =>{
    try{
        let model = new buildingModel(building)
        await model.save()
        return {status:200,data:'building data posted'}
    }catch(e){
        return getError(e,e.code,fileName, 'post_building_data');
    }
}

const Post_room_data = async (room) =>{
    try{
        let model = new roomModel(room)
        await model.save()
        return {status:200,data:'room data posted'};
    }catch(e){
        return getError(e,e.code, fileName, 'post_room_data');
    }
}

const Post_sensor_data = async (sensor) =>{
    try{
        let model = new sensorModel(sensor)
        await model.save()
        return {status:200, data:'sensor data posted'};
    }catch(e){
        return getError(e,e.code,fileName, 'post_sensor_data');
    }
}

module.exports ={
    post_building_data: Post_building_data,
    post_room_data: Post_room_data,
    post_sensor_data: Post_sensor_data
}