const { Server } = require("socket.io")

 class Io {
    constructor(server) {
        this.io = new Server(server, {
            cors: '*'
        })
        this.init()
    }
    init() {
        console.log('init')
        this.io.on('connection', this.onConnection)
    }
    onMsg(msg) {
        console.log(msg, 'msg')
    }
    onConnection(socket) {
        socket.on('msg', this.onMsg)
    }
}

module.exports = Io