// path, os, and process usage

const path = require("path");
const os = require("os");

console.log("Home dir:", os.homedir());
console.log("CPU count:", os.cpus().length);
console.log("Path join:", path.join(__dirname, "sample.txt"));
console.log("Process pid:", process.pid);
console.log("global === globalThis:", global === globalThis);
