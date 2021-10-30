const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const HotelRoom = new Schema({
    name: {type:String, required: true},
    image: {type:String, required: true},
    description: {type:String, required: true},
    nightAdultPrice: {type:Number, required: true},
    nightkidPrice: {type:Number, required: true}
})

module.exports = mongoose.model('HotelRoom', HotelRoom)

