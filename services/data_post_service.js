const {getError} = require('../utilities/errorHandler');
const fileName = 'data_post_service';

const Post_building_data = () =>{
    try{
        return 'building data posted'
    }catch(e){
        return getError(e,e.code,fileName, 'post_building_data');
    }
}

const Post_room_data = () =>{
    try{
        return 'room data posted';
    }catch(e){
        return getError(e,e.code, fileName, 'post_room_data');
    }
}

const Post_sensor_data = () =>{
    try{
        return 'sensor data posted';
    }catch(e){
        return getError(e,e.code,fileName, 'post_sensor_data');
    }
}

module.exports ={
    post_building_data: Post_building_data,
    post_room_data: Post_room_data,
    post_sensor_data: Post_sensor_data
}