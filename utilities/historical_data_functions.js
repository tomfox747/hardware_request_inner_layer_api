const moment = require('moment')
const buildingHistModel = require('../models/building-hist')
const roomHistModel = require('../models/room-hist')
const buildingModel = require('../models/building')
const roomModel = require('../models/room')

const getCurrentBuildingData = async () =>{
    //perform request to get all current building data
    let buildingData = await buildingModel.find({}).lean().exec()
    //return data
    return buildingData
}

const getCurrentRoomData = async () =>{
    //perform request to get all current room data
    let roomData = await roomModel.find({}).lean().exec()
    //return data
    return roomData
}

const processBuildingData = (buildingData) =>{
    //format the data to fit the building data model of the hist database
    let processedBuildingData = buildingData.map((element) =>{
        return{
            Id:element.Id,
            CurrentPopulation:element.CurrentPopulation,
            TimeStamp:moment().unix()
        }
    })
    //return data
    return processedBuildingData
}

const processRoomData = (roomData) =>{
    //format the data to fit the room model for the hist database
    let processedRoomData = roomData.map((element) =>{
        return {
            Building:element.Building,
            RoomId:element.RoomId,
            CurrentPopulation:element.CurrentPopulation,
            TimeStamp:moment().unix()
        }
    })
    //return data
    return processedRoomData
}

const sendBuildingData = async (buildingData) =>{
    //post the building data to the hist database
    try{
        await buildingHistModel.collection.insertMany(buildingData, (res) =>{
            console.log("buildings ++ success")
        })
    }
    catch(e){
        console.log(e)
        return "error posting building data"
    }
}

const sendRoomData = async (roomData) =>{
    //post the room data to the hist database
    try{
        await roomHistModel.collection.insertMany(roomData, (res) =>{
            console.log("rooms ++ success")
        })
    }catch(e){
        console.log(e)
        return "error posting building data"
    }
    
}

module.exports = {
    getCurrentBuildingData,
    getCurrentRoomData,
    processBuildingData,
    processRoomData,
    sendBuildingData,
    sendRoomData
}