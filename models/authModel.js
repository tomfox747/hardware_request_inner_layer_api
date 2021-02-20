const mongoose = require('mongoose')
const db = require('../db/authInit')
const connection = db

const authSchema = mongoose.Schema({
    Origin:String
},{collection:'hardwareinternalorigins'})

const authModel = connection.model('harwareinternalorigins', authSchema)

module.exports = authModel