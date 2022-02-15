
<p align="center">
  <h1 align="center">Code Complete</h1>

  <p align="center">
    A boot repository that has some good practices for API servers wired in.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Motivation](#motivation)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Run and Test](#run-and-test)
* [Stay in touch](#stay-in-touch)


## About the project
A boot repository that has some good practices for API servers wired in. Built on [nestjs](https://nestjs.org/) and use modern Javascript powered by 
[Typescript](https://www.typescriptlang.org/). 
To use, fork into your rep and start having fun.

### Motivation
Main goal is making uncomplicaded creation of server-side applications, modulables, plugables, free and efortless 
architecture.
   
### Built With

* [nestjs](https://nestjs.com/) - The web framework used
* [Typescript](https://www.typescriptlang.org/) - Main Language
* [typeorm](https://github.com/inversify/InversifyJS/) - Used for dependency Injection

## Getting Started

### Prerequisites

**Important!** Requires Docker Desktop.

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

## API Documentation

get localhost:3000/api

## Practices Included

Open API (Swagger)

Docker based setup

Github Workflow (ci.yml) 

Unit Tests (Controller and Service)

CI Includes (linter, unit tests, test coverage)

Strict Type Checking

static application testing using [njsscan] https://github.com/ajinabraham/njsscan#github-action

## Practices Outstanding

CI - Security Analysis

CD - AWS\Azure\Heroku

Obervability via OpenTelemetry

Integration tests

Penetration tests

OWASP Cheatsheet

## Stay in Touch

* Author - [Anoop Kumar](anoop.kumar@extentia.com)

