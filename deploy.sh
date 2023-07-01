#!/bin/bash
set -e

echo "Enter Your Git Branch You Want To Deploy"
read branch
ls

echo "Git Step Processing ...."
git branch
git status
git checkout $branch
git pull origin