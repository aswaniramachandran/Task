
const express = require("express");
const router = express.Router();
const {
  addTask,
  getAllTasks,
  getTasks,
  updateTask,
  deleteTask,
  getStats,

} = require('../Controller/taskController')


router.post("/", addTask);

router.get("/all", getAllTasks);


router.get("/", getTasks);


router.put("/:id", updateTask);


router.delete("/:id", deleteTask);


router.get("/stats", getStats);

module.exports = router;