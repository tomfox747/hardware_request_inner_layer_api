const mongoose = require('mongoose');

const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/authentication?retryWrites=true&w=majority";
const databaseName = "authentication"

const authenticateOrigin = async (req,res,next) =>{
    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/,/)[0] : req.connection.remoteAddress

    mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName})
    
    mongoose.connection.on('connected', () =>{
        console.log("connection to database successful")
    })
    mongoose.connection.on('error', () =>{
        console.log("database connection error")
        process.exit(0)
    })

    let schema = mongoose.Schema({
        origin:String
    })

    let OriginModel = mongoose.model('hardwareinternalorigins', schema)

    let result = await OriginModel.find({}).lean().exec()

    if(result.filter(element => element.origin === ip).length > 0){
        console.log("request authorised")
        next()
    }else{
        console.log("request unauthorised")
        res.send("request unauthorised")
    }

    delete mongoose.connection.models['hardwareinternalorigins']
}

module.exports = authenticateOrigin