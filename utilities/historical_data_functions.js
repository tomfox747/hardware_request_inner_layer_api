const axios = require('axios')

const getCurrentBuildingData = () =>{
    //perform request to get all current building data
    //return data
}

const getCurrentRoomData = () =>{
    //perform request to get all current room data
    //return data
}

const processBuildingData = () =>{
    //format the data to fit the building data model of the hist database
    //return data
}

const processRoomData = () =>{
    //format the data to fit the room model for the hist database
    //return data
}

const sendBuildingData = () =>{
    //post the building data to the hist database
}

const sendRoomData = () =>{
    //post the room data to the hist database
}

module.exports = {
    getCurrentBuildingData,
    getCurrentRoomData,
    processBuildingData,
    processRoomData,
    sendBuildingData,
    sendRoomData
}