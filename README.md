<div align="center">

<h1>Contact Details</h1>

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://badges.aleen42.com/src/vitejs.svg)

</div>

## Introduction:Contact Details

This project is a simple web application for managing contact details. It provides the following features:

Search: Users can search for contacts by name or phone number.
Add: Users can add a new contact by providing the necessary details.
Edit: Users can edit existing contacts to update their information.
Delete: Users can delete contacts from the list.
The application also includes a feature to add a random user to the contact list, which can be useful to quickly populate the list with sample data.

## Built with

Application was built with the below list backend packages/libraries

- Express - Building a robust and scalable backend
- Sequelize - An ORM for working with MySQL databases.

API Features:

CRUD Operations:

- Create, Read, Update, and Delete contacts through well-defined Express routes.
- Postman folder contain JSON file of CRUD operations.

For the Frontend packages/libraries

- React
- react-redux
- redux toolkit

Database:

A deployment script is provided (seed.sql) containing the SQL query to create the contacts table.

## Getting Started

- Clone the Repo
- Run `npm i` (install server)
- cd to client
- Run `npm i` (install react)
- Create a .env file in the root directory of the app and save your sql server credentials to a a variables:

  DB_DATABASE,DB_USERNAME,DB_PASSWORD,DB_HOST.

  Example:
  `DB_DATABASE=contacts
DB_USERNAME=********
DB_PASSWORD=********
DB_HOST=********`

## Development server:

- Run `node --watch server.js` for a dev server.
- Cd to client folder - Run `npm run dev` for a client.
- Open Google Chrome or any browser and type - `http://localhost:3000/`.

## Contributors

- Philip Kouchner
