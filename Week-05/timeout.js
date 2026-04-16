// timers + promise delay

console.log("Start");

setTimeout(() => {
    console.log("Timeout callback (0ms)");
}, 0);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

delay(150)
    .then(() => console.log("Promise delay done"))
    .catch((err) => console.error("Promise error:", err));

(async () => {
    console.log("Async start");
    await delay(300);
    console.log("Async done");
})();