# STATIC-APP

[![CircleCI](https://circleci.com/gh/JustalK/STATIC-APP.svg?style=svg)](https://circleci.com/gh/JustalK/STATIC-APP)

This project is a fresh starter for creating a **static website** with all my favorite tools.

The server is handled with `Next.js`. The data are receive with `@apollo/client` from `GraphCMS`.

The continuous integration is handled with `CircleCI`. Finally, I use `Cypress` for making the e2e tests.

Before committing, `Husky` will force the tests to be run, it will also check the coverage of the app to be at 100% and will validate or not the new push.
