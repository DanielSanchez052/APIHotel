const express = require('express')
const morgan = require('morgan')
const { connectDB } = require('../Database/connection.js')
const routes = require('../routes/routes.js')
const pkg =  require('../package.json')
const cors = require('cors')

require('dotenv').config()

class ServerModel{
    constructor(){
        this.app = express()
        this.app.use(morgan('dev'))
        this.app.set('port', process.env.PORT || 3000)
        this.app.set("pkg",pkg)
        this.connectionDB()
        this.callMiddlewares()

        // connectDB()
        this.routeRequests()
        
        
    }

    routeRequests(){
        this.app.use('/api/v1/',routes) 
        this.app.get("/api/v1", (req, res) => {
            res.json({
                message: "API Rest",
                name: this.app.get("pkg").name,
                version: this.app.get("pkg").version,
                description: this.app.get("pkg").description,
                author: this.app.get("pkg").author,
                paths: this.list_routes(routes,'/api/v1')
            });
        });
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
        this.app.use(cors())
        //Initial route
    }
 
    list_routes(router, basePath=''){
        return router.stack.filter(r => r.route).map(r => {
            return{
                [Object.keys(r.route.methods)[0].toUpperCase()] : basePath + r.route.path
            } 
        })
    }
}


module.exports = ServerModel