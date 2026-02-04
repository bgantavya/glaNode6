// compare sync vs async fs
// timing and output differences

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "sample.txt");

fs.writeFileSync(filePath, "Hello from fs demo\n", "utf8");

const syncData = fs.readFileSync(filePath, "utf8");
console.log("Sync read:", syncData.trim());

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) return console.error(err);
  console.log("Async read:", data.trim());
});
