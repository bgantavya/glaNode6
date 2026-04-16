#!/usr/bin/env bash
# variables, loops, and conditionals

set -e

name="student"

echo "Hello, $name"

for n in {1..5}; do
  echo "Number: $n"
done

if [[ -f data.txt ]]; then
  echo "data.txt exists"
else
  echo "data.txt missing"
fi

count=0
while [[ $count -lt 3 ]]; do
  echo "Loop $count"
  count=$((count + 1))
done
