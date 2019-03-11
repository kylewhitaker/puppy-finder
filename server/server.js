// Connect to MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/puppy-finder', (error) => {
  if (error) {
    console.error('MongoDB is not running. Failed to connect.');
    throw error;
  } else {
    console.log('Successfully connected to MongoDB');
  }
});

// Create DB Model
const Schema = mongoose.Schema;
const canineSchema = new Schema({
  type: 'String',
  age: 'String',
  coordinates: [['String']]
});
const doggieSchema = new Schema({
  title: 'String',
  image: 'String',
  canines: [canineSchema]
});
const model = mongoose.model('Puppy', doggieSchema, 'puppies');

// Startup Express
const express = require('express');
const app = express();

// enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Setup API endpoint, fetch puppy data from DB
app.get('/', (req, res) => {
  model.find().exec((err, puppies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(puppies);
    }
  });
});

// Serve port
const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));
