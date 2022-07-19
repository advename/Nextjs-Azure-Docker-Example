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

The `.env` file, which is copied over during the build step in the Dockerfile has not to be ignored in the `.dockerignore` file to use shell environment variables. Shell environment variables take precedence over env files. This is helpful in build pipelines where environment variables are commonly exposed in the shell and not saved in `.env` files.

Source: [Environment Variable Load Order - Next.js](https://nextjs.org/docs/basic-features/environment-variables#environment-variable-load-order)
