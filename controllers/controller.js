
const playerController = {
    insertReservation:(req, res)=>{
        res.status(201).json({message:"Crear Reserva"})
    },

    getReservation : (req, res)=>{
        res.json({message:"Buscar Reserva"})
    } ,

    getReservationById : (req, res)=>{
        res.json({message:"Buscar Reserva por id"})
    },
    updateReservation : (req, res)=>{
        res.json({message:"Actualizar Reserva"})
    } ,
    deleteReservation : (req, res)=>{
        res.json({message:"Eliminar Reserva"})
    } 
}

module.exports = {playerController}