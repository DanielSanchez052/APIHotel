const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userReservation = new Schema({
    name : String,
    last_name : String,
    phone : String,
    start_date : String,
    end_date : String,
    number_people : String
})

module.exports = mongoose.model('userReservation', userReservation)