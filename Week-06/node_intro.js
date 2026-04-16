// Node.js introduction

console.log("Node.js intro");
console.log("V8 version:", process.versions.v8);
console.log("Event-driven model: callbacks run after the call stack clears");

setImmediate(() => {
  console.log("setImmediate callback");
});
