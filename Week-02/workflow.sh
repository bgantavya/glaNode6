#!/usr/bin/env bash
# create branch, push, update PR push changes to origin

set -e

git checkout -b feature/login

git push -u origin feature/login

git commit -am "Address review feedback"

git push
