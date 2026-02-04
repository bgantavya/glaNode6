# understand staging and history edit, diff, reset

set -e
mkdir -p git_internal_demo
cd git_internal_demo

git init

echo "v1" > file.txt
git add file.txt
git commit -m "Add v1"

echo "v2" > file.txt

git diff

git add file.txt

git diff --staged

git log --oneline

git reset --soft HEAD~1

git status -sb
