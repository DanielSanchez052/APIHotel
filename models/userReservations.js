const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userReservation = new Schema({
    name : { type: String, required: true },
    last_name : { type: String, required: true },
    phone : { type: String, required: true },
    start_date : { type: Date, required: true },
    end_date : { type: Date, required: true },
    number_people : { type: String, required: true },
})

module.exports = mongoose.model('userReservation', userReservation)