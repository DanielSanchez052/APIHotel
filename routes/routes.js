const {Router} = require('express');
const {ReservationController} = require('../controllers/ReservationController.js')
const {RoomController} = require('../controllers/RoomController.js')


const routes = Router()

const baseReservation = '/reservation'
const baseRoom = '/room'

routes.get(baseReservation, ReservationController.getReservation)
routes.post(baseReservation, ReservationController.insertReservation)
routes.get(baseReservation+'/:id', ReservationController.getReservationById)
routes.put(baseReservation+'/:id', ReservationController.updateReservation)
routes.delete(baseReservation+'/:id', ReservationController.deleteReservation)

routes.get(baseRoom, RoomController.getRoom)
routes.post(baseRoom, RoomController.insertRoom)
routes.get(baseRoom+'/:id', RoomController.getRoomById)
routes.put(baseRoom+'/:id', RoomController.updateRoom)
routes.delete(baseRoom+'/:id', RoomController.deleteRoom)


module.exports=routes



 
