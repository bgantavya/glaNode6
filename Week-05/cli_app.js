#!/usr/bin/env node
// simple CLI app

const args = process.argv.slice(2);

if (args.length === 0 || args.includes("--help")) {
  console.log("Usage: node cli_app.js <name> [--upper]");
  process.exit(0);
}

const name = args[0];
const upper = args.includes("--upper");
const output = upper ? name.toUpperCase() : name;

console.log(`Hello, ${output}!`);
