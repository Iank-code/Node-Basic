const os = require('os');

// Platform
console.log(os.platform())

// CPU architecture
console.log(os.arch())

// CPU Core info
console.log(os.cpus())

// Free memory info
console.log("free memory",os.freemem())

// Total memory
console.log("Total memory", os.totalmem());

// Home dir
console.log("Home dir", os.homedir());

// Uptime
console.log("Uptime", os.uptime());

