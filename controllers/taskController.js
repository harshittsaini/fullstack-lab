// controllers/taskController.js
const Task = require('../models/taskModel');

// Create a new task
const createTask = async (req, res) => {
    const { title, description } = req.body;

    try {
        const task = new Task({
            title,
            description,
        });

        await task.save();
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (err) {
        res.status(500).json({ message: 'Error creating task', error: err });
    }
};

// Get all tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching tasks', error: err });
    }
};

// Update a task
const updateTask = async (req, res) => {
    const { title, description, completed } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true });
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task updated', task });
    } catch (err) {
        res.status(500).json({ message: 'Error updating task', error: err });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting task', error: err });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask,
};
