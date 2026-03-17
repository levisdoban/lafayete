#!/usr/bin/env bash
#excuse

echo killing old docker processes

docker compose rm -fs

docker system prune -f

echo building docker containers

docker compose up --build -d 



