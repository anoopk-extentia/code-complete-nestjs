
<p align="center">
  <h1 align="center">Code Complete</h1>

  <p align="center">
    A boot repository that has some good practices for API servers wired in.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
# Table of Contents

* [About the Project](#about-the-project)
  * [Motivation](#motivation)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Run and Test](#run-and-test)
* [Stay in touch](#stay-in-touch)


# About the project
A boot repository that has some good practices for API servers wired in. Built on [nestjs](https://nestjs.org/) and use modern Javascript powered by 
[Typescript](https://www.typescriptlang.org/). 
To use, fork into your rep and start having fun.

### Motivation
Main goal is to provide a seed repository for a nestjs web application that has some develpoment and deployment patterns wired in. Most of these patterns need no further maintainence. They are meant to keep programmers on the 'straight-n-narrow' without getting too much in their way. 
   
### Built With

* [nestjs](https://nestjs.com/) - The web framework used
* [Typescript](https://www.typescriptlang.org/) - Main Language
* [typeorm](https://github.com/inversify/InversifyJS/) - TypeORM is a JavaScript library that's capable of connecting to several database engines.

# Getting Started

### Prerequisites

**Important!** Requires Docker Desktop for local deployments.

### Installation
git clone https://github.com/anoopk-extentia/code-complete-nestjs.git

npm install

### Set up local environment

Create file in project root called `.env` and set all environment variables as specified int he .env.example file

docker-compose up --build

npm run typeorm migration:run

### Run and Test
(For local run) npm start - This needs the Postgres to be running 

get localhost:3000

get localhost:3000/names

post localhost:3000/names

### API Documentation

get localhost:3000/api

### Graphql

The app also publishes a graphql API using [Postgraphile] https://www.graphile.org/postgraphile/

The URL for the API server is specified within the .env file

To view the graphql API (outside the this app) run 
npx postgraphile -c 'postgres://postgres:postgres@localhost/sessions' --watch --enhance-graphiql --dynamic-json

On the browser goto http://localhost:5000/graphiql

All queries should be visible and callable


### Health Check

[Database] http://localhost:3002/health/db

[Service] http://localhost:3002/health

[HeapMemory] http://localhost:3002/health/memory

### Application Documentation

npm install -g @compodoc/compodoc

npx @compodoc/compodoc -p tsconfig.json -s

[AppDoc] http://127.0.0.1:8080

### After Installation

Delete the current modules

Delete all Migrations

The game, as Sherlock would say, is on

### Practices Included

Pre-commit hook to run linter/new tests (skip using -n with commit)

Unit Tests (Controller and Service)

Open API (Swagger)

Docker based setup for local deployments

Github Workflow (ci.yml) 

CI Includes (linter, unit tests, test coverage, Snyk audit)

Strict Type Checking

Semantic Versioning

Data Migrations using TypeOrm

Insecure code pattern detection via [njsscan] https://github.com/ajinabraham/njsscan#github-action

Obervability via Open Relic

### Practices Outstanding

CD - AWS\Azure\Heroku

Integration tests

Penetration tests

OWASP Cheatsheet

### Addons

Health Checker via [terminus] https://docs.nestjs.com/recipes/terminus

App Documentation via [Compodoc] https://compodoc.app/ (npx @compodoc/compodoc -p tsconfig.json -s)

# Talk to me

* anoop.kumar@extentia.com

