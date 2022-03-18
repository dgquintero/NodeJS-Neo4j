
const neo4j = require('neo4j-driver');
require('dotenv').config()
const {
  url,
  db_username,
  db_password,
  database
} = process.env

const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));

const session = driver.session({ database });


const findAll = async ()=> {
  const result = await session.run(`MATCH (n1) RETURN n1 LIMIT 25`)
  console.log(result)
  return result.records.map(i=>i.get('n1').properties)
}

export default {
  findAll
}
