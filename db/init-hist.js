const init = require('./connection')
//create config file env for connection string
const connectionString = "mongodb+srv://super:supertom@currentdata.ftroe.mongodb.net/testhistorical?retryWrites=true&w=majority"
const dbName = "testhistorical"

const dbManager = init(connectionString, dbName)

module.exports = dbManager