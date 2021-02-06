const db = require('../db/init')

const { model, Schema } = db;

const buildingSchema = new Schema({
    Id:{type:String, required:true},
    CountryCode: { type: String, required: true },
    Region: { type: String, required: true },
    City: { type: String, required: true },
    Address: { type: Array, required: true },
    Rooms: { type: String, required: true  },
    Sensors: { type: String, required: true  },
    CurrentPopulation: { type: String, required: true  },

}, { collection: 'buildings' });

const buildingModel = model('users', buildingSchema);

module.exports = buildingModel;