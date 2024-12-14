// MySQL2 package import karte hain
const mysql = require('mysql2');

// Connection Pool create karte hain
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '2208',
  database: 'student',
  waitForConnections: true,
  connectionLimit: 10,
  //   queueLimit: 0               
});


module.exports = pool;
