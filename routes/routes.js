const {Router} = require('express');
const {playerController} = require('../controllers/controller.js')

const routes = Router()

routes.get('/reservation', playerController.getReservation)

module.exports=routes