# init, add, commit basic repo lifecycle

set -e
mkdir -p git_demo
cd git_demo

git init

echo "Hello Git" > readme.txt
git add readme.txt
git commit -m "Add readme"

git log --oneline
