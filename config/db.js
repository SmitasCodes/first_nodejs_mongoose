const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const connectionDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_AUTH);
        console.log(`Connected to DB ${connect.connection.host}`)
    } catch(err){
        console.error(`Could not connect to DB`,err)
    }
}

module.exports = connectionDB;