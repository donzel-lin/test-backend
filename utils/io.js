const { Server } = require("socket.io")
const  dayjs = require('dayjs')
 class Io {
    static socket = null
    constructor(server) {
        this.io = new Server(server, {
            cors: {
                origin: '*'
            }
        })
        this.init()
    }
    init() {
        this.io.on('connection', (socket) => this.onConnection(socket))
    }
    onMsg(msg) {
        this.socket.emit('answer', {
            ...msg,
            content: 'answer-bbb',
            isHost: false,
            time: dayjs().format('YYYY-MM-DD HH:mm:ss'),
            type: 'text'
        })
    }
    onConnection(socket) {
        this.socket = socket
        this.socket.on('hello', (msg) => this.onMsg(msg))
    }
}

module.exports = Io