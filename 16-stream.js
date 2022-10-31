const {createReadStream} = require('fs')

const stream = createReadStream('./content/BigText.txt')

stream.on('data', (result) =>{
    console.log(result)
})