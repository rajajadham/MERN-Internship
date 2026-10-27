const os = require("os");

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("Total Memory:", os.totalmem());
console.log("Free Memory:", os.freemem());

console.log("CPU Info:");
console.log(os.cpus());
