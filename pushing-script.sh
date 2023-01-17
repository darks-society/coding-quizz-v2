#!/bin/bash

git status
git add .
echo "after : "
git status
echo "enter commit msg : "
read msg
echo "do you want to skip ci y/n"
read SKIPCI
answer=$(echo "$SKIPCI" | tr '[:upper:]' '[:lower:]')
if [ $answer == 'y' ]
then
    git commit -m "$msg [skip ci]"
else
    git commit -m "$msg"
fi
echo "pushing ..."
git push -u test master


