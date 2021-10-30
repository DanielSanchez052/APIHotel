const { HotelRoomService } = require("../services/HotelRoomService.js")

const RoomController = {
    insertRoom: async (req, res)=>{
        const { name,image,description,nightAdultPrice,nightkidPrice } = req.body
        try{
            const savedRoom = await HotelRoomService.addRoom({name,image,description,nightAdultPrice,nightkidPrice })

            res.status(201).json({message:"Habitacion creada"})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Error al procesar la solicitud", data:error})
        }
    },

    getRoom : async (req, res)=>{
        try{
            const room = await HotelRoomService.getRoom()
            res.status(200).json({data:room})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Not Found"})
        }
    } ,

    getRoomById : async (req, res)=>{
        try{
            const idRoom =req.params.id
            const room = await HotelRoomService.getRoomById( idRoom )
            res.status(200).json({data:room})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Not Found"})
        }
    },
    updateRoom : async (req, res)=>{
        const { name,image,description,nightAdultPrice,nightkidPrice } = req.body
        const id = req.params.id
        try{
            const updatedRoom = await HotelRoomService.updateRoom(id,{ name,image,description,nightAdultPrice,nightkidPrice })
            res.status(200).json({message:" Habitacion actualizada "})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Error"})
        }
    },
    deleteRoom : async (req, res)=>{
        const id = req.params.id
        try{
            const deletedRoom = await HotelRoomService.deleteRoom(id)
            res.status(200).json({message:" Habitacion Eliminada "})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Error"})
        }
    }
}

module.exports = {RoomController}