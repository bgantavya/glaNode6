
set -e
mkdir -p demo_fs
cd demo_fs

touch .hidden_file visible_file

echo "Absolute path: $(pwd)/visible_file"

echo "Listing including hidden files:"
ls -la

echo "Inode numbers:"
ls -li

inode=$(ls -li visible_file | awk '{print $1}')
find . -inum "$inode" -print
