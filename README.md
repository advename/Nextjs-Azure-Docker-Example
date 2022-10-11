# Next.js Azure Docker Example

A dockerized Next.js project, used as an example to deploy to Azure's _Web App for Containers_.

This example project is built with inspiration from:

- [`create-next-app`](https://nextjs.org/docs/api-reference/create-next-app) boilerplate
- [Next.js docker example](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)
- [Next.js multi-env docker example](https://github.com/vercel/next.js/blob/canary/examples/with-docker-multi-env/docker/development/docker-compose.yml)

Copy `.env.example`, name the copy as `.env` and populate with data.

This is the initial project, which may see changes during the guide explaining how to deploy a Dockerized Next.js project.

### Local development

There's no local development optimized docker setup for this example.

Run `npm run dev`, without Docker, and develop as you're used to.

### Running locally with Docker

- `cd` into the `docker/` directory
- run `docker-compose up --build --force-recreate`, building a new image and running the application in a Docker container.

### About `.env` file
- The .env file is copied into the Dockerfile in the second build stage. Since this is not the final output stage, we don't have to worry exposing content from the `.env` in the docker image. It's important that this file is not mentioned in the `.dockerignore`
- Running Docker locally with Docker compose, the `.env` file is used twice. Once in the Dockerfile for build time, as mentioned in above point, and once in the docker-compose.yml for runtime use. 

