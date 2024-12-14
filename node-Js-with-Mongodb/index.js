const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3005;

// Middleware to parse JSON bodies
app.use(express.json());


// Connection to MongoDB
 mongoose.connect("mongodb://127.0.0.1:27017/data")
    .then(() => console.log("MongoDB Connected"))
   .catch(err => console.log("Mongo Error:", err));

// Schema definition
const userSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: true,
   },
   lastName: {
      type: String,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   JobTitle: {
      type: String,
   }
});

// Model
const User = mongoose.model("User", userSchema);

// Route to add a new user
app.post("/api/users", async (req, res) => {
   const body = req.body;
console.log(body);

   // Validate input
   if (!body || !body.firstName || !body.lastName || !body.email || !body.JobTitle) {
      return res.status(400).json({ msg: "All fields are required" });
   }
   try {
      // Create user in MongoDB
      const result = await User.create({
         firstName: body.firstName,
         lastName: body.lastName,
         email: body.email,
         JobTitle: body.JobTitle,
      });

      console.log(result);


      // Send success response
      return res.status(201).json({ msg: "User created successfully", user: result });
   } catch (err) {
      // Handle error, such as duplicate email
      return res.status(500).json({ msg: "Error creating user", error: err.message });
   }
});




// Start the server
app.listen(port, () => console.log("Server started on port", port));

