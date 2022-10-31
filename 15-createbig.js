const {writeFileSync} = require('fs')
for(let i =0; i<10000;i++){
    writeFileSync('./content/BigText.txt',`Hello World ${i}\n` , {flag: 'a' })
}