#!/usr/bin/env bash
# branch and merge feature integration

set -e
mkdir -p git_branch_demo
cd git_branch_demo

git init

echo "base" > app.txt
git add app.txt
git commit -m "Base commit"

git checkout -b feature

echo "feature" >> app.txt
git add app.txt
git commit -m "Feature work"

git checkout master

git merge feature

git log --oneline --graph --decorate
