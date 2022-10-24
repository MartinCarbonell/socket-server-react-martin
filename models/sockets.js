




class Sockets {

    constructor( io ) {

        this.io = io;
        
        this.socketEvents();
    }

    socketEvents() {
        //ON CONNECTION
        //io.on=todas las instancias reciben el mensaje
        this.io.on('connection', ( socket ) => { 

        

            //ESCUCHAR EVENTO
            //socket.on = solo la instancia escucha
            socket.on('mensaje-to-server', ( data ) => {
                console.log(data);

                this.io.emit('mensaje-from-server', data);
            });
        });
    }

}

module.exports = Sockets;