const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "nzc@1989",
  database: "nzcdb",
});

//connect to database

connection.connect(function (error) {
  if (error) throw error;
  else console.log("Connected to database successfully !");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var name = req.body.name;
  var sql = "INSERT INTO accounts (Name) VALUES ('" + name + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.send("Account Record Inserted Successfully!!");
    res.end();
  });
});

app.listen(4500);
