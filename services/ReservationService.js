const userReservation = require('../models/userReservations.js')

const ReservationService= {
    addReserve : async (dataReserve)=>{
        const saveReserve = new userReservation(dataReserve)
        return await saveReserve.save()
    },

    getReserveById : async (id) => await userReservation.findOne({ '_id': id },{ '__v' : 0}),

    getReserve : async () => await userReservation.find({ },{ '__v' : 0}),

    updateReserve : async (id,Reserve)=>await userReservation.findByIdAndUpdate(id,Reserve),

    deleteReserve : async (id)=> await userReservation.findByIdAndDelete(id)
}


module.exports = { ReservationService }