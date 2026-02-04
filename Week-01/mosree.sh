# WHAT: grep/find/chmod/pipes/background

set -e
mkdir -p adv_demo
cd adv_demo

printf "error: first\ninfo: ok\nerror: second\n" > app.log

grep -n "error" app.log

find . -type f -name "*.log" > log_files.txt

chmod 644 app.log
cat app.log | grep "info" > info_only.txt

sleep 1 &
wait
