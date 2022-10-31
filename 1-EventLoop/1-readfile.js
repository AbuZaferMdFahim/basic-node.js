const { readFile } = require('fs')
const { compact } = require('lodash')

console.log('Started First Task')
//check File Path
readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('Completed First Task');
})
console.log('Stating next Task');