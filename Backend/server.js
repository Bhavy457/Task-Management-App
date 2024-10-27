const dotenv = require("dotenv").config();
const express = require("express");
// const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");

const app = express();

// connectDB();

//Middleware
app.use(express.json());
app.use(taskRoutes);

//Routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// Use this function in server,js to connect to MongoDB and start the server

// const startServer = async () => {
//   try {
//     await connectDB();
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();
