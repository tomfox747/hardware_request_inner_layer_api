const mongoose = require('mongoose');

const dbManager = (connectionString, databaseName) => {

    // Create the database connection
    let connection = mongoose.createConnection(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, dbName: databaseName });

    // Log successful connection
    connection.on("connected", function () {
        console.log(`Mongoose connection open to database`);
    });

    // If the connection throws an error, log it and then exit the application
    connection.on("error", function (err) {
        console.error("Mongoose connection error", err);
        process.exit(0);
    });

    // Log disconnected
    connection.on("disconnected", function () {
        console.log("Mongoose connection disconnected");
    });

    // If the user attempts to close the app by terminating it then cleanup and exit
    process.on("SIGINT", function () {
        mongoose.connection.close(function () {
            process.exit(0);
        });
    });

    return connection;
};

module.exports = dbManager;