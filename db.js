require('dotenv').config()

const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect(process.env.db);
    const connection = mongoose.connection
    connection.on('connected', () => {
        console.log('Mongo DB Connection Successfull')
    })
    connection.on('error', () => {
        console.log('Mongo DB Connection Error')
    })
}

connectDB()

module.exports = mongoose