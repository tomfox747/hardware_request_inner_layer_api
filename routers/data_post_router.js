const express = require('express');
const router = express.Router();
const data_post_service = require('../services/data_post_service');
const {getError, generateReturnError} = require('../utilities/errorHandler')
const fileName = 'data_post_router';

router.post('/post_building_data',(req,res) =>{
    try{
        let buildingObj = req.body
        const response = data_post_service.post_building_data(buildingObj);
        res.send(response);
    }catch(e){
        console.log(e)
        const err = getError(e,e.code,fileName, 'post_building_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.post('/post_room_data',(req,res) =>{
    try{
        let roomObj = req.body
        const response = data_post_service.post_room_data(roomObj);
        res.send(response);    
    }catch(e){
        const err = getError(e,e.code, fileName, 'post_room_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.post('/post_sensor_data',(req,res) =>{
    try{
        let sensorObj = req.body
        const response = data_post_service.post_sensor_data(sensorObj);
        res.send(response);
    }catch(e){
        const err = getError(e,e.code, fileName, 'post_sensor_data');
        const returnErrror = generateReturnError(err);
        res.send(returnError)
    }
})

module.exports = router;