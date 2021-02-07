const buildingModel = require('../models/building');
const roomModel = require('../models/room');
const sensorModel = require('../models/sensor');
const {getError} = require('../utilities/errorHandler');
const fileName = 'data_post_service';

const Post_building_data = async (building) =>{
    try{
        await buildingModel.updateOne({Id:building.Id},building)
        return {status:200,data:'building data posted'}
    }catch(e){
        return getError(e,e.code,fileName, 'post_building_data');
    }
}

const Post_room_data = async (room) =>{
    try{
        await roomModel.updateOne({Building:buildingId,RoomId:room.Id}, room)
        return {status:200,data:'room data posted'};
    }catch(e){
        return getError(e,e.code, fileName, 'post_room_data');
    }
}

const Post_sensor_data = async (sensor, buildingId) =>{
    try{
        await sensorModel.updateOne({Building:buildingId, sensorId:sensor.sensorId},sensor)
        return {status:200, data:'sensor data posted'};
    }catch(e){
        return getError(e,e.code,fileName, 'post_sensor_data');
    }
}

const Increment_room_population = async(buildingId, roomId) =>{
    try{
        let room = await roomModel.findOne({Building:buildingId, RoomId:roomId}).lean().exec()
        let newPopulation = Number(room.CurrentPopulation) + 1
        room.CurrentPopulation = String(newPopulation)
        await roomModel.updateOne({Building:buildingId, RoomId:roomId}, room)
        let building = await buildingModel.findOne({Id:buildingId}).lean().exec()
        newPopulation = Number(building.CurrentPopulation) + 1
        building.CurrentPopulation = newPopulation
        await buildingModel.updateOne({Id:buildingId},building)
        return {status:200, data:'increment successful'};
    }catch(e){
        return getError(e,e.code,fileName,'increment_room_population')
    } 
}

const Decrement_room_population = async(buildingId,roomId) =>{
    try{
        let room = await roomModel.findOne({Building:buildingId, RoomId:roomId}).lean().exec()
        if (Number(room.CurrentPopulation) < 1){
            return {status:200, data:'population 0'}
        }
        let newPopulation = Number(room.CurrentPopulation) - 1
        room.CurrentPopulation = String(newPopulation)
        await roomModel.updateOne({Building:buildingId, RoomId:roomId}, room)
        let building = await buildingModel.findOne({Id:buildingId}).lean().exec()
        newPopulation = Number(building.CurrentPopulation) - 1
        building.CurrentPopulation = newPopulation
        await buildingModel.updateOne({Id:buildingId},building)
        return {status:200, data:'decrement successful'};
    }catch(e){
        return getError(e,e.code,fileName,'increment_room_population')
    } 
}

module.exports ={
    post_building_data: Post_building_data,
    post_room_data: Post_room_data,
    post_sensor_data: Post_sensor_data,
    increment_room_population:Increment_room_population,
    decrement_room_population:Decrement_room_population
}