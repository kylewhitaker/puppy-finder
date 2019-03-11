# Puppy Finder

## MERN tech stack
  - React.js front-end
  - Node.js + Express back-end
    - Node v.8.12.0 and NPM v.6.4.1
  - MongoDB database
    - MongoDB shell v3.6.1

## Installation & Setup
  - [Install Node](https://nodejs.org/en/download/)
  - [Install MongoDB](https://docs.mongodb.com/manual/installation/)
  - Connect to MongoDB
    - `mongod`
  - Load data into local database
    - `mongoimport --jsonArray --db puppy-finder --collection puppies --file data.json`
  - Pull source code from GitHub
    - `git clone https://github.com/kylewhitaker/puppy-finder.git`
  - Spin up Server
    - `node server/server.js`
  - Spin up Client
    - Install dependencies via `npm install`
    - Run Client application via `npm start`
  - Open application in web browser
    - Navigate to [http://localhost:3000/](http://localhost:3000/)
