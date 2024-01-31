require('dotenv').config()
var pgp = require('pg-promise')();
var { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env
var db = pgp(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?ssl=true`);

module.exports = db;
