# MY SWEET DIANE - WEBSITE

![Alt text](documentation/presentation/1.png?raw=true "MY-SWEET-DIANE-WEBSITE-Website-1")

![Alt text](documentation/presentation/2.png?raw=true "MY-SWEET-DIANE-WEBSITE-Website-2")

[![CircleCI](https://circleci.com/gh/JustalK/MY-SWEET-DIANE-WEBSITE.svg?style=svg)](https://circleci.com/gh/JustalK/MY-SWEET-DIANE-WEBSITE)

[www.justalk.life](http://www.justalk.life)

This project is a website made for my wife. I made [an app for her](https://github.com/JustalK/VALENTINES-APP). It was a great project but after a few months, I was thinking about transforming my previous idea into a journal. Something were we could both go anytime and scrolling through our history from day one to the present. And so I started to create a website with `Next.js` and linked t to an admin interface my wife could use easily, `graphCms`.

The continuous integration is handled with `CircleCI`. Finally, I use `Cypress` for making the e2e tests.
Before committing, `Husky` will force the tests to be run, it will also check the coverage of the app to be at 100% and will validate or not the new push.

## Plan of the presentation

I explain with all the details how I build the project and my way of working.

* [Goal](#goal)
* [Flowchart](#flowchart)
* [Organization](#organization)
* [Installation](#Installation)
* [Development](#Development)
* [Commands](#commands)

## Goal

My goal on this project was to code properly a infinite scroll, playing with the call of graphCMS on next.js. I also wanted a different version for mobile and desktop. All of that while at the same time keeping the lighthouse of the google chrome console at 100%. The result is quite positive :

![Alt text](documentation/presentation/3.png?raw=true "MY-SWEET-DIANE-WEBSITE-Result")

## Flowchart

The navigation goes from the top of the app, we can come back to the previous page by the back button or by the menu.

![Alt text](documentation/flowchart.png?raw=true "MY-SWEET-DIANE-WEBSITE-Flowchart")

## Organization

#### Organization of the root folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| coverage      | coverage files generated by istanbul                    |
| cypress       | regroup the e2e test                                    |
| documentation | everything related to the documentations                |
| out           | generated files from the jsdoc                          |
| public        | public files like images, fonts...                      |
| src           | regroup the source code                                 |

#### Organization of the src folder

| Folder's Name | Description of the folder                               |
| :------------ | :------------------------------------------------------ |
| components    | reutilizable components of the app                      |
| constants     | all the constants of the app                            |
| helper        | the functions helper for the whole app                  |
| pages         | the pages of the app                                    |
| services      | the call to graphCms                                    |
| styles        | the style of the app                                    |

## Installation

The easiest and fatest way to install this project is through `docker` with this command :

```
$ npm run docker
```

You can also install all the dependencies of the project by running this command at the root of the project :
```
$ npm install
```

## Development

There is two branches :

* **master**: This is the branch that will be deploy on the server
* **dev**: This is the branch for developing

## Commands

* **dev**: Run the dev version
* **test**: Run the dev test
* **start**: Run the latest build version
* **build**: Create a build version
* **linter**: Lint the code
* **build:docs**: Create the jsdoc
* **build:wait**: Run test on the dev
* **build:test**: Run the e2e test after building
* **build:test:fast**: Run the e2e test on the latest build
* **build:docker**: Create the docker image
* **build:docker:run**: Run the built docker image
* **cypress:run**: Run the cypress test
* **cypress:open**: Open the cypress tool
* **cypress:coverage**: Check if the coverage respect a certain value
