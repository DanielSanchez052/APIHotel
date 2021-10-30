const HotelRoom = require('../models/HotelRoomModel.js')

const HotelRoomService= {
    addRoom : async (dataRoom)=>{
        const saveRoom = new HotelRoom(dataRoom)
        return await saveRoom.save()
    },

    getRoomById : async (id) => await HotelRoom.findOne({ '_id': id },{ '__v' : 0}),

    getRoom : async () => await HotelRoom.find({ },{ '__v' : 0}),

    updateRoom : async (id,room)=>await HotelRoom.findByIdAndUpdate(id,room),

    deleteRoom : async (id)=> await HotelRoom.findByIdAndDelete(id)
}


module.exports = { HotelRoomService }