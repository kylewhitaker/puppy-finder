# Puppy Finder!

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

## Requirements
  - [x] React.js to be used for the frontend
  - [x] Node.js to be used for the backend
  - [x] Mongo to be used for the database
  - [ ] (Bonus) Wrap everything up in Docker
  - [x] data.json contains JSON documents that should be loaded into a database
  - [x] Develop appropriate endpoints for retrieving paged data from the database
  - [x] Images should be presented in some type of paging / carousel
  - [x] The title of the image should display on the top of each page
  - [x] The image should display under the title
  - [x] A table should display below each image listing out the dogs grouped by type and age
  - [x] Plot the bounding boxes for each image
  - [x] Provide complete solution source code
  - [x] Include instructions for loading the database and starting the solution
  - [x] Describe any alterations from the requested technology stack or user interface design
  - [x] When you are ready to begin, make an initial git commit with a blank README, .gitignore, or similar
  - [x] Your last commit should be no longer than 4 hours from your first
  - [x] Push your submission to a public git repository and email us the link for review

## Notes
  - I chose a photo carousel NPM package that was clean-looking and fairly easy to implement. I'm pleased with the way it turned out!
