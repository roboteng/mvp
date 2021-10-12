const Mysql = require('mysql');

const connection = Mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'notes',
});

module.exports = connection;