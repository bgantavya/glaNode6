// blocking vs non-blocking output order

const fs = require("fs");

console.log("Start");

try {
  const data = fs.readFileSync(__filename, "utf8");
  console.log("Sync length:", data.length);
} catch (err) {
  console.error(err);
}

fs.readFile(__filename, "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log("Async length:", data.length);
});

console.log("End");
