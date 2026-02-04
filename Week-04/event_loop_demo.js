// see event loop ordering queue macrotask and microtask

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask callback");
});

console.log("End");
