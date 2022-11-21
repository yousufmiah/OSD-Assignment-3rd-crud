const { MongoClient } = require("mongodb");
require("dotenv").config();

// Create a new MongoClient
const client = new MongoClient(process.env.DATABASE_ATLAS);

console.log("Database connected");

module.exports = { client };
