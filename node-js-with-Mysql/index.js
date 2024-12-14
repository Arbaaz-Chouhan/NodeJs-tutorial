const express = require("express");
const con = require('./connection');
const path = require("path");
const bodyParser = require("body-parser");
const { name } = require("ejs");
const app = express();
const port = 3004;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "register.html"));

});
app.post("/", (req, res) => {
  let name = req.body.name;
  let address = req.body.address;
  let PhoneNO = req.body.Phone_NO;

  // Corrected SQL query to use "INSERT INTO"
  let sql = "INSERT INTO employes (name, address, Phone_NO) VALUES (?, ?, ?)";

  // Execute the SQL query
  con.query(sql, [name, address, PhoneNO], (error, result) => {
    if (error) throw error
    res.send("Employee registered successfully! ID: " + result.insertId);
  });
});

app.get("/employes", (req, res) => {

  var sql = "SELECT * FROM employes" 
  con.query(sql, (error, result) => {
    if (error) throw error;
    // res.render("employes"); // Sirf filename pass karo

    res.render(path.join(__dirname,"employes") ,{employes :result})
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

