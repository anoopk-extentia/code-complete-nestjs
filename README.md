# code-complete-nestjs

## The Idea
#### A boot repository that has some good practices for API servers wired in.  

## Setup

git clone https://github.com/anoopk-extentia/code-complete-nestjs.git

npm install // For local install mainly but also for other dev dependencies

Copy .env.example to .env and ormconfig.example.json to ormconfig.json

Correct the information within these files

//Create the tables within the DB. This will need the db to be running within the docker container 

docker-compose up --build

npm run typeorm migration:run

## Use

get localhost:3000

get localhost:3000/names

post localhost:3000/names

## API Documentation

get localhost:3000/api

## Practices Included

Open API (Swagger)

Docker based setup

Github Workflow (ci.yml)

CI Includes (linter, unit tests, test coverage)

## Practices Outstanding

OWASP Cheatsheet