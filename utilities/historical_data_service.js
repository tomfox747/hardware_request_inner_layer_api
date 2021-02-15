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

const task = new Task('simple task', async () =>{
    //*******use promise chains
    //perform actions
    let buildingData = await getCurrentBuildingData()
    let roomData = await getCurrentRoomData()

    buildingData = processBuildingData(buildingData)
    roomData = processRoomData(roomData)

    let postBuildingsResult = await sendBuildingData(buildingData)
    let postRoomResult = await sendRoomData(roomData)
})
const job = new SimpleIntervalJob({hours:1},task)

historical_data_service_object.addSimpleIntervalJob(job)

module.exports = historical_data_service_object;