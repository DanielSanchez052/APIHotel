const ServidorModelo = require('./models/ServerModel.js')

const server = new ServidorModelo()

server.beginListen()
