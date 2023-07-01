#!/bin/bash
set -e

echo "Enter Your Git Branch You Want To Deploy"
read branch

cd /var/www/back-end/
echo "Git Step Processing ...."
if [ -z "$branch" ]; then
    echo "\$branch is NULL"
    git pull origin
else
    git fetch
    git checkout $branch
    git pull origin

fi

echo "Dockerize BE ...."
docker-compose -f docker-compose-dev.yml up --build -d

echo "Finish"
