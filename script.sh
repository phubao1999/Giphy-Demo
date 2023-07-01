#!/bin/bash
set -e

echo "Enter Your Git Branch You Want To Deploy"
read branch

echo "Git Step Processing ...."
git checkout $branch
git pull origin

echo "Remove Old Folder"
rm -r ./build

echo "Building And Deploy Step"
# echo "Docker Build"
# docker build -t fe-image .
# echo "Docker Container"
# docker run -d -p 80:80 --name fe-container fe-image