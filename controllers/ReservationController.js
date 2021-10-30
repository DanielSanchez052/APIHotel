const { ReservationService } = require("../services/ReservationService.js")

const ReservationController = {
    insertReservation: async (req, res)=>{
        const { name,last_name,phone,start_date,end_date,number_people } = req.body
        try{
            const savedReserve = await ReservationService.addReserve({name,last_name,phone,start_date,end_date,number_people })

            res.status(201).json({message:"Reserva Insertada"})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Error al procesar la solicitud", data:error})
        }
    },

    getReservation : async (req, res)=>{
        try{
            const reservations = await ReservationService.getReserve()
            res.status(200).json({data:reservations})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Not Found"})
        }
    } ,

    getReservationById : async (req, res)=>{
        try{
            const idReserve =req.params.id
            const reservation = await ReservationService.getReserveById( idReserve )
            res.status(200).json({data:reservation})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Not Found"})
        }
    },
    updateReservation : async (req, res)=>{
        const { name,last_name,phone,start_date,end_date,number_people } = req.body
        const id = req.params.id
        try{
            const updatedReserve = await ReservationService.updateReserve(id,{ name,last_name,phone,start_date,end_date,number_people })
            res.status(200).json({message:" Reserva actualizada "})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Error"})
        }
    },
    deleteReservation : async (req, res)=>{
        const id = req.params.id
        try{
            const deletedReserve = await ReservationService.deleteReserve(id)
            res.status(200).json({message:" Reserva Eliminada "})
        }catch(error){
            console.log(error)
            res.status(400).json({message:"Error"})
        }
    }
}

module.exports = {ReservationController}