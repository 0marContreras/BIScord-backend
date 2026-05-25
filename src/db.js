const mongoose = require('mongoose')

const mongoUrl = "mongodb+srv://BIScordAdmin:xklmpDbdf55PiDLd@biscordcluster.hn0kv3j.mongodb.net/BISCORD" //Poner aca la uri
// const mongoUrl = process.env.MONGO_URL

// console.log('uy: ', mongoUrl)

mongoose.connect(mongoUrl, {
}).then(()=>{
    console.log("[+] Connected succesfully")
}).catch(error => {
    console.error("[-] Error trying to connect: ", error)
});

module.exports = mongoose.connection;