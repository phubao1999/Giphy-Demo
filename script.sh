#!/bin/bash
set -e

echo "Enter Your Git Branch You Want To Deploy"
read branch

cd /path/to/fe_directory
echo "Git Step Processing ...."
if [ -z "$branch" ]; then
    echo "\$Branch is NULL"
    git pull origin
else
    git fetch
    git checkout $branch
    git pull origin
fi

echo "Build Step"
npm install --legacy-peer-deps
npm run build

echo "Replace old build folder to new folder"
cp -rf ./dist /var/www/html

echo "Restart Service For Nginx"
sudo service nginx restart
