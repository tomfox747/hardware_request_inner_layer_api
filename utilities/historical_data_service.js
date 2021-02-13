const {ToadScheduler, SimpletIntervalJob, Task, SimpleIntervalJob} = require('toad-scheduler')
const historical_data_service_object = new ToadScheduler()
const{
    getCurrentBuildingData,
    getCurrentRoomData,
    processBuildingData,
    processRoomData,
    sendBuildingData,
    sendRoomData
} = require('./historical_data_functions')

const task = new Task('simple task',() =>{
    //*******use promise chains
    //perform actions
    let buildingData = getCurrentBuildingData()
    let roomData = getCurrentRoomData()

    let buildingData = processBuildingData(buildingData)
    let roomData = processRoomData(roomData)

    sendBuildingData(buildingData)
    sendRoomData(roomData)
})
const job = new SimpleIntervalJob({seconds:10},task)

historical_data_service_object.addSimpleIntervalJob(job)

module.exports = historical_data_service_object;