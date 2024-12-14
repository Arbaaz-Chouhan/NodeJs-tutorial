const pool = require('./connection'); // Pool import karte hain
const path = require("path"); // 'path' module to handle file paths
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3008;

// Middleware to parse form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "student.html")); // Correct way to send the HTML file
});


app.post('/', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;
    let Class = req.body.Class;
    let address = req.body.address;
    let PhoneNO = req.body.Phone_Number;

    let sqlquery = "INSERT INTO student(name, age, Class, address, Phone_Number) VALUES (?, ?, ?, ?, ?)";

    pool.query(sqlquery, [name, age, Class, address, PhoneNO], (err, result) => {
        if (err) throw err;

        res.send("Student Register successful! ID: " + result.insertId);
    });
});

// Server start karna
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
