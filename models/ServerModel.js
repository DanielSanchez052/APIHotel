const express = require('express')
const morgan = require('morgan')
const { connectDB } = require('../Database/connection.js')
const routes = require('../routes/routes.js')
require('dotenv').config()

class ServerModel{
    constructor(){
        this.app = express()
        this.app.use(morgan('dev'))
        this.app.set('port', process.env.PORT || 3000)
        this.connectionDB()
        this.callMiddlewares()
        // connectDB()
        this.routeRequests()
        
    }

    routeRequests(){
        this.app.use('/api/v1/',routes) 
    }

    connectionDB(){
      connectDB()
    }

    beginListen(){

        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Listening on port ${this.app.get('port')}...`)
        })

        this.routeRequests()
    }

    callMiddlewares(){
        this.app.use((express.json()))
    }
}


module.exports = ServerModel