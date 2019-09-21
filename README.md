# Face-Recognize-api

Face Recognize is a project that provide the function of recognizing human face in a picture. Just input an image url then it will recognize it for you. This repo is the backend part of the project, using Express.js and Node.js to build application server.

The app is already deployed on Heroku, you can view the live demo here: **[face-recognize](https://face-recognize.herokuapp.com)**.
> Notes: this project is under optimizing and it is rrecommended not to use vital personal information to register or communicate with the database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisities

You will need to install **[Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/)** for this code base.

## Installing

```
npm install
```
> Notes: this project uses [bcrypt-node.js](https://www.npmjs.com/package/bcrypt-nodejs) library to encrypt passwords.

```
npm start
```
> This script will run 'nodemon server.js', help monitoring while server working.

## Built with

- Use **Node.js** and **Express.js** to build server.
- Use **Knex.js** to interact with the database.
- Use **PostgreSQL** to build relational database.
- Handle face recognize function using **[Clarifai api](https://www.clarifai.com/)**.

## Related

- [Face-Recognize](https://github.com/chinyun/Face-Recognize)
The fornt-end side of the project.
