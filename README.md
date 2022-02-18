
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
* [typeorm](https://github.com/inversify/InversifyJS/) - Used for dependency Injection

# Getting Started

### Prerequisites

**Important!** Requires Docker Desktop for local deployments.

### Installation
git clone https://github.com/anoopk-extentia/code-complete-nestjs.git

npm install

Copy .env.example to .env and ormconfig.example.json to ormconfig.json

Correct the information within these files

docker-compose up --build

npm run typeorm migration:run

### Run and Test
get localhost:3000

get localhost:3000/names

post localhost:3000/names

### API Documentation

get localhost:3000/api

### Practices Included

Pre-commit hook to run linter/new tests (skip using -n with commit)

Open API (Swagger)

Docker based setup for local deployments

Github Workflow (ci.yml) 

Unit Tests (Controller and Service)

CI Includes (linter, unit tests, test coverage, Snyk audit)

Strict Type Checking

Insecure code pattern detection via [njsscan] https://github.com/ajinabraham/njsscan#github-action

### Practices Outstanding

CD - AWS\Azure\Heroku

Obervability via OpenTelemetry

Integration tests

Penetration tests

OWASP Cheatsheet

### Addons

Health Checker via [terminus] https://docs.nestjs.com/recipes/terminus

App Documentation via [Compodoc] https://compodoc.app/ (npx @compodoc/compodoc -p tsconfig.json -s)

# Talk to me

* Author - [Anoop Kumar](anoop.kumar@extentia.com)

