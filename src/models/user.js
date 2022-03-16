
const neo4j = require('neo4j-driver');
require('dotenv').config()
const {
  url,
  username,
  password,
  database
} = process.env
const driver = neo4j.driver(url, neo4j.auth.basic(username, password));

const session = driver.session({ database });

// session.run(query)

