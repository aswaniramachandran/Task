const express = require('express');
require('dotenv').config();
const ConnectDB = require('./db/configdb');
const taskRoute =require('./route/taskRoute')
const cors = require("cors");
const AuthRoute=require('./route/authRoute')

const app = express();
const port = 5000;


// Connect to DB first
ConnectDB();
app.use(cors({
  origin: "http://localhost:3000", // allow only React app
  methods: ["GET", "POST", "PUT", "DELETE"],
}));


// Middleware to parse JSON
app.use(express.json());

// Use your routes

app.use("/tasks", taskRoute);
app.use('/',AuthRoute)

app.listen(port, () => {
  console.log(`Server starting at http://localhost:${port}`);
});
