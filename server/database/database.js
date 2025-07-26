const mongoose = require('mongoose');

const mongo_url = process.env.DATABASE;

const mongoConnection = ()=>{
    mongoose.connect(mongo_url).then(()=>{
        console.log("Database connected")
    }).catch((error)=>{
        console.log(error.message)
    })
}

module.exports = mongoConnection;