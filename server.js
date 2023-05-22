const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'your-database-name';

// Create a new MongoClient
const client = new MongoClient(url);

// Connect to the MongoDB server
client.connect(function(err) {
  console.log("Connected successfully to MongoDB server");

  const db = client.db(dbName);

  // Perform database operations
  // ...
});

const port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});