const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.CONNECTION_DB);
        console.log("Exito en la conexion a la base de datos")
    }catch(error){
        console.log(error)
    }
}
module.exports = { connectDB }
