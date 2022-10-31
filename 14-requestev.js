const http = require('http')

// const server = http.createServer((req,res) => {
//     res.end('Welcomed')
// })

//using event emitter api

const server = http.createServer()
//emits request events 
//subscribe to it/ listen to it
server.on('request',(req, res) => {
    res.end('Welcome')
})
server.listen(5000);

