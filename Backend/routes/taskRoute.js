const express = require("express");
const Task = require("../model/taskModel");
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");
const router = express.Router();

//Create a Task
router.post("/", createTask);

//Get/Read Data
router.get("/", getTasks);
router.get("/:id", getTask);

//Delete Task
router.delete("/:id", deleteTask);

//Update task
router.put("/:id", updateTask);

module.exports = router;
