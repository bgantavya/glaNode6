#!/usr/bin/env bash
# basic Unix commands

set -e
mkdir -p cmd_demo
cd cmd_demo

touch note.txt
printf "line1\nline2\n" > note.txt

pwd
ls -la
cat note.txt

# show manual page output without opening a pager
man ls | head -n 5

cd ..
rm -f cmd_demo/note.txt
rmdir cmd_demo
