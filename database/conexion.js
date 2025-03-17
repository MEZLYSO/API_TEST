const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "School",
});

db.connect((e) => {
  if (e) {
    throw e;
  }
  console.log("Connect DB");
});

module.exports = db;
