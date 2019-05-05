//Require mysql
var mysql = require("mysql");

//Require .env file
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  //credentials
  user: process.env.DB_USER,

  //select database
  password: process.env.DB_PASSWORD,
  database: "burgers"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });