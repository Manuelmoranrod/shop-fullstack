const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();
const pool = new Pool({
    host: 'localhost', //process.env.HOST,
    user: 'postgres', //process.env.USER,
    database: 'shop', //process.env.DATABASE,
    password: '123abc' //process.env.PASSWORD
})
module.exports = pool



/*
host: 'localhost', //process.env.HOST,
user: 'postgres', //process.env.USER,
database: 'shop', //process.env.DATABASE,
password: '123abc' //process.env.PASSWORD 
*/