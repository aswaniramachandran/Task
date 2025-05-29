const Task = require('../model/task')

// Add new task
// Assuming you have imported your Task model correctly
const addTask = async (req, res) => {
  try {
    const { text, completed = false } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Task text required" });
    }

    const task = new Task({ text, completed }); // Include completed field
    await task.save();

    res.status(201).json({ message: "Task added successfully", task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tasks without any filter or search
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get tasks with filter and search
getTasks = async (req, res) => {
  try {
    const { filter, search } = req.query;
    let query = {};

    if (filter === "completed") query.completed = true;
    else if (filter === "pending") query.completed = false;

    if (search) query.text = { $regex: search, $options: "i" };

    const tasks = await Task.find(query).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a task
updateTask = async (req, res) => {
  try {
    const { text, completed } = req.body;
    const updateData = {};
    if (text !== undefined) updateData.text = text;
    if (completed !== undefined) updateData.completed = completed;

    const task = await Task.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!task) return res.status(404).json({ error: "Task not found" });

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a task
deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

getStats = async (req, res) => {
  try {
    const total = await Task.countDocuments();
    const completed = await Task.countDocuments({ completed: true });
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    res.json({ total, completed, percentageCompleted: percentage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports={getStats,deleteTask,updateTask,addTask ,getTasks,  getAllTasks, }

