// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// let myServer = http.createServer((req, resp) => {
//     const log = `${ new Date()} ${req.url} : New Req Received\n`;

//     // URL Parsing
//     let myurl = url.parse(req.url, true); // true to parse query parameters
//     console.log(myurl.pathname);

//     // Log the request
//     fs.appendFile("./log.tex", log, (err) => {
//         if (err) console.error('Error writing to file:', err);
//     });

//     // Route Handling
//     switch (myurl.pathname) {
//         case "/":
//             resp.end("HomePage");
//             break;

//         case "/about":
//             const username = "Arbaaz"; // Example username
//             resp.end(`Hi, ${username}`);
//             break;

//         case "/search":
//             const searchQuery = myurl.query.search_query;
//             resp.end("Here are your results for: " + searchQuery);
//             break;

//         default:
//             resp.end("404 Page Not Found");
//             break;
//     }
// });

// myServer.listen(8000, () => console.log("Start Server"));


// const http = require("http");
// const express = require("express");
// const app = express();

// // Define a route for the home page
// app.get("/", (req, res) => {
//     return res.send("Hello From Home Page");
// });

// app.get("/about", (req, res) => {
//     return res.send("Hello From About Page" + req.query.name);
// });

// const exp = http.createServer(app);
// exp.listen(8000, () => console.log("Server started"));


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
