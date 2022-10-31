const os = require('os')

//info about users
const user = os.userInfo();
console.log(user);

//method return the system uptime the seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentos = {
 name: os.type(),
 relase: os.release(),
 totalMem: os.totalmem(),
 freeMem: os.freemem(),
}
console.log(currentos);