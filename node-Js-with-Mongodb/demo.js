const users = require("./mock_data.json");
const express = require("express");
const app = express();
// const port = 300;

app.get("/api", (req, res) => {
    const html = `
        <ul>
            ${users.map(user => `<li>${user.first_name}</li>`).join("")}
        </ul>`;
    res.send(html)
    ;
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  