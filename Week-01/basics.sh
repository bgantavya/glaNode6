#!/usr/bin/env bash
# WHY: drill core file commands
# HOW: create, read, remove
# WHAT: pwd/ls/cd/touch/cat/rm

set -e
mkdir -p playground/subdir
cd playground

touch hello.txt
printf "Hello, Buddy!\n" > hello.txt

pwd
ls -l
cat hello.txt

cd subdir
pwd
cd ..
rm -f hello.txt
rmdir subdir
