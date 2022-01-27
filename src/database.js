const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'company'
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected to database');
  }
});

module.exports = connection;