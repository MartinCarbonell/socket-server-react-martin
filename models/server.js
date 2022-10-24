//Servidor de Express
const express = require('express');
//const { path } = require('express/lib/application');

//Servidor de sockets
const http = require('http');

const socketio = require('socket.io');
const path = require('path');
const  Socket  = require('./sockets');



class Server{
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // Http server
        this.server = http.createServer( this.app );
        
        
        //Configuraciones de sockets
        
        this.io = socketio(this.server, {/* Configureciones */});
    }

    middleweares() {
        //Desplegar el directorio público
        this.app.use( express.static( path.resolve(__dirname, '../public') ) );
    }

    configuracionSockets() {
        new Socket(this.io);
    }

    execute() {

        // Inicializar middleweares
        this.middleweares();

        this.configuracionSockets();

        // Inicializar Server
        this.server.listen(this.port, () =>{
            console.log('Server corriendo en puerto:', this.port);
        });
    }

}



module.exports = Server;