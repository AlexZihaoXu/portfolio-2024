#!/bin/bash

# Reset local changes and pull the latest code
git fetch origin
git reset --hard origin/main

rm -rf ./build/*

# Build the project
yarn install
yarn build

# Restart Docker container
sudo docker compose down
sudo docker compose up -d