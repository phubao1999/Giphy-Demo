#!/bin/bash
set -e

echo "Enter Your Git Branch You Want To Deploy"
read branch

echo "Git Step Processing ...."
git checkout $branch
git pull origin

echo "Build Step"
npm install --legacy-peer-deps
npm run build

echo "Replace old build folder to new folder"
cp -rf ./dist /var/www/html

echo "Restart Service For Nginx"
sudo service nginx restart