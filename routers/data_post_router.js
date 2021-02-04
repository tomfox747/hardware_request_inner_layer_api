const express = require('express');
const router = express.Router();
const data_post_service = require('../services/data_post_service');
const {getError, generateReturnError} = require('../utilities/errorHandler')
const fileName = 'data_post_router';

router.post('/post_building_data',(req,res) =>{
    try{
        const response = data_post_service.post_building_data();
        res.send(response);
    }catch(e){
        const err = getError(e,e.code,fileName, 'post_building_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.post('/post_room_data',(req,res) =>{
    try{
        const response = data_post_service.post_room_data();
        res.send(response);    
    }catch(e){
        const err = getError(e,e.code, fileName, 'post_room_data');
        const returnError = generateReturnError(err);
        res.send(returnError);
    }
})

router.post('/post_sensor_data',(req,res) =>{
    try{
        const response = data_post_service.post_sensor_data();
        res.send(response);
    }catch(e){
        const err = getError(e,e.code, fileName, 'post_sensor_data');
        const returnErrror = generateReturnError(err);
        res.send(returnError)
    }
})

module.exports = router;