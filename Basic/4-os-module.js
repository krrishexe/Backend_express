const os = require('os')     
// built in module   (Operating System)


// info about the current user
const user = os.userInfo()
console.log(user)

// sysytem uptime in seconds
console.log('the sysytem uptime is ' + os.uptime())

//
const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(), 
}
console.log(currentOS.name)