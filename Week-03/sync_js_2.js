// sync JS II: error handling with try/catch

console.log("Sync parse demo");

const goodJson = '{"ok": true}';
const badJson = "{ bad json }";

function parseOrReport(text) {
  try {
    const parsed = JSON.parse(text);
    console.log("Parsed ok:", parsed);
  } catch (err) {
    console.error("Parse error:", err.message);
  }
}

parseOrReport(goodJson);
parseOrReport(badJson);
