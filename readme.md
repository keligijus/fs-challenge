## About

This repo is a solution for the [Guardrails challenge](https://github.com/guardrailsio/full-stack-engineer-challenge). It consists of a devops, server and client tasks.

__Devops__

Dev enviroment can be started with `docker-compose up`. It will start development server for client, a server for api and a MySQL database (which will be created of the first run).

__Client__

The dashboard is based on create-react-app. Not ejected, not modified, with Bulma CSS framework added.

__Server__

The api is an Express.js app. It has a few routes and a catch-all route that servers index.html. It should server the React app in production.

## Instructions

To start a developing, just run `docker-compose up`.

## Ideas

To fully love the project, I would add tests, input validation (currenly the only validation is done by MySQL), and error handling.

I understand that this repo is raw, yet it should be sufficient to review the code.