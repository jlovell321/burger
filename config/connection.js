var mysql = require("mysql");
//open connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});



module.exports = connection;
