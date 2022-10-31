const {createReadStream} = require('fs')

const stream = createReadStream('./content/BigText.txt',{highWaterMark: 90000,encoding: 'utf8'
})

// default 64kb
// last biffer - remainder
// highWaterMark - control size 
// const stream = createReadStream('./content.BigText.txt'. {highWaterMark: 90000}) 
// const stream = createReadStream('./content.BigText.txt'. {encodingt: 'utf8' })

stream.on('data', (result) =>{
    console.log(result)
})
stream.on('error', (err)=> console.log(err))