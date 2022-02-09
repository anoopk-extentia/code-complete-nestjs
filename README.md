# code-complete-nestjs

## The Idea
#### A boot repository that has some good practices for API servers wired in.  

## Setup

git clone https://github.com/anoopk-extentia/code-complete-nestjs.git

npm install // For local install mainly but also for other dev dependencies

Create the following two files with correct info.

_____________________________ .env ______________________________________

POSTGRES_HOST=postgres      //For Docker

POSTGRES_HOST=127.0.0.1     //For local

POSTGRES_PORT=5432          //This is also hard coded in the docker-compose

POSTGRES_USER=postgres

POSTGRES_PASSWORD=XXXXXXXX

POSTGRES_DATABASE=sessions

PORT=3000

MODE=DEV

RUN_MIGRATIONS=true

_________________________________ ormconfig.json _________

_________________________________ This is used by typeorm cli _______________________

{
  "type": "postgres",

  "host": "127.0.0.1",

  "port": 5432,

  "username": "postgres",

  "password": "XXXXXXXXX",

  "database": "sessions",

  "entities": [
    "**/*.entity{.ts,.js}"
  ],

  "migrationsTableName": "migration",
  
  "migrations": [
    "src/migration/*.ts"
  ],
  
  "cli": {
    "migrationsDir": "src/migration"
  },
  
  "ssl": false
}

___________________________________________________________________________


//Create the tables within the DB. This will need the db to be running within the docker container 

npm run typeorm migration:run

docker-compose up --build

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