echo "User: $USER"
echo "Shell: $SHELL"

pwd
ls -la / | head -n 10

echo "Home directory contents:"
ls -la "$HOME" | head -n 10
