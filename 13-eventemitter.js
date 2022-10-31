const EventEmitter = require('events')

const custom = new EventEmitter()

custom.on('response', (name ,id) => {
    console.log(`Data Recieved user ${name} with id: ${id} `)
})
custom.on('response', () => {
    console.log(`Some Other Logic Here : `)
})
custom.emit('response','Anim',24);